import { api } from './api';
import { User, UserStats, LeaderboardEntry } from '@/types/user';

export const userService = {
  // 创建用户
  createUser: async (username: string): Promise<{ user_id: string; username: string }> => {
    const response = await api.post('/api/users', { username });
    return response.data;
  },

  // 获取用户统计
  getUserStats: async (userId: string): Promise<UserStats> => {
    const response = await api.get(`/api/users/${userId}`);
    return response.data;
  },

  // 获取排行榜
  getLeaderboard: async (limit: number = 10): Promise<{ leaderboard: LeaderboardEntry[] }> => {
    const response = await api.get(`/api/leaderboard?limit=${limit}`);
    return response.data;
  },

  // 获取成就列表
  getAchievements: async (): Promise<any> => {
    const response = await api.get('/api/achievements');
    return response.data;
  },
};