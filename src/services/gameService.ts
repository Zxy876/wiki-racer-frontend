import { api } from './api';

// 内联类型定义
interface GameRequest {
  start: string;
  end: string;
  user_id?: string;
}

interface GameResponse {
  game_id: string;
  status: string;
  path?: string[];
  message?: string;
  score?: number;
  achievements?: string[];
  start?: string;
  end?: string;
  search_time?: number;
}

export const gameService = {
  createGame: async (request: GameRequest): Promise<GameResponse> => {
    const response = await api.post<GameResponse>('/api/game', request);
    return response.data;
  },

  createGameAsync: async (request: GameRequest): Promise<GameResponse> => {
    const response = await api.post<GameResponse>('/api/game/async', request);
    return response.data;
  },

  getGameStatus: async (gameId: string): Promise<any> => {
    const response = await api.get(`/api/game/${gameId}`);
    return response.data;
  },

  testCrawl: async (pageTitle: string): Promise<any> => {
    const response = await api.get(`/test-crawl/${pageTitle}`);
    return response.data;
  },

  testPath: async (start: string, end: string): Promise<any> => {
    const response = await api.get(`/test-path/${start}/${end}`);
    return response.data;
  },
};
