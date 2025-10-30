import { api } from './api';
import { UserStats, LeaderboardEntry } from '../types/user';

export const userService = {
  createUser: async (username: string): Promise<{ user_id: string; username: string }> => {
    const response = await api.post('/api/users', { username });
    return response.data;
  },

  getUserStats: async (userId: string): Promise<UserStats> => {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  },

  getLeaderboard: async (limit: number = 10): Promise<{ leaderboard: LeaderboardEntry[] }> => {
    const response = await api.get(`/api/leaderboard?limit=${limit}`);
    return response.data;
  },

  getAchievements: async (): Promise<any> => {
    const response = await api.get('/api/achievements');
    return response.data;
  },
};
