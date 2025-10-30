import { api } from './api';
import { GameRequest, GameResponse } from '@/types/game';

export const gameService = {
  // 创建同步游戏
  createGame: async (request: GameRequest): Promise<GameResponse> => {
    const response = await api.post<GameResponse>('/api/game', request);
    return response.data;
  },

  // 创建异步游戏
  createGameAsync: async (request: GameRequest): Promise<GameResponse> => {
    const response = await api.post<GameResponse>('/api/game/async', request);
    return response.data;
  },

  // 获取游戏状态
  getGameStatus: async (gameId: string): Promise<any> => {
    const response = await api.get(`/api/game/${gameId}`);
    return response.data;
  },

  // 测试爬虫
  testCrawl: async (pageTitle: string): Promise<any> => {
    const response = await api.get(`/test-crawl/${pageTitle}`);
    return response.data;
  },

  // 测试路径查找
  testPath: async (start: string, end: string): Promise<any> => {
    const response = await api.get(`/test-path/${start}/${end}`);
    return response.data;
  },
};