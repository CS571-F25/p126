import { useState, useEffect } from 'react';

// This custom hook fetches and processes all player data, including calculating trends.
export function usePlayerData() {
    const [top100Players, setTop100Players] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);
            try {
                const currentWeek = 10;
                const weeksToCompare = [currentWeek - 1, currentWeek];

                const [playersRes, seasonStatsRes, ...weeklyStatsRes] = await Promise.all([
                    fetch('https://api.sleeper.app/v1/players/nfl'),
                    fetch('https://api.sleeper.app/v1/stats/nfl/regular/2025'),
                    ...weeksToCompare.map(week => fetch(`https://api.sleeper.app/v1/stats/nfl/regular/2025/${week}`))
                ]);

                const playersData = await playersRes.json();
                const seasonStats = await seasonStatsRes.json();
                const weeklyStats = await Promise.all(weeklyStatsRes.map(res => res.json()));

                const fantasyPositions = ['QB', 'RB', 'WR', 'TE'];

                const processedPlayers = Object.values(playersData)
                    .filter(player => fantasyPositions.includes(player.position))
                    .map(player => {
                        const fullStats = seasonStats[player.player_id];
                        if (!fullStats || fullStats.gp === 0 || typeof fullStats.pts_ppr !== 'number') {
                            return null;
                        }

                        const current_ppg = parseFloat((fullStats.pts_ppr / fullStats.gp).toFixed(2));

                        let recentGames = 0;
                        let recentPoints = 0;
                        weeklyStats.forEach(weekStats => {
                            const weeklyStat = weekStats[player.player_id];
                            if (weeklyStat) {
                                recentGames += weeklyStat.gp || 0;
                                recentPoints += weeklyStat.pts_ppr || 0;
                            }
                        });

                        const pastGames = fullStats.gp - recentGames;
                        const pastPoints = fullStats.pts_ppr - recentPoints;

                        if (pastGames <= 0) {
                            return { ...player, current_ppg, trend: 'SAME' };
                        }

                        const past_ppg = parseFloat((pastPoints / pastGames).toFixed(2));
                        
                        let trend = 'SAME';
                        if (current_ppg > past_ppg) {
                            trend = 'UP';
                        } else if (current_ppg < past_ppg) {
                            trend = 'DOWN';
                        }

                        return { ...player, current_ppg, trend };
                    })
                    .filter(player => player !== null);
                
                const sortedTop100 = processedPlayers
                    .sort((a, b) => b.current_ppg - a.current_ppg)
                    .slice(0, 100);

                setTop100Players(sortedTop100);
            } catch (error) {
                console.error("Failed to fetch or process player data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return { top100Players, isLoading };
}