import { useState, useCallback } from 'react';
import { gameService } from '@/services/gameService';
import { GameRequest, GameResponse } from '@/types/game';

export const useGame = () => {
  const [currentGame, setCurrentGame] = useState<GameResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createGame = useCallback(async (request: GameRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const game = await gameService.createGame(request);
      setCurrentGame(game);
      return game;
    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || err.message || '创建游戏失败';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createGameAsync = useCallback(async (request: GameRequest) => {
    setLoading(true);
    setError(null);
    
    try {
      const game = await gameService.createGameAsync(request);
      setCurrentGame(game);
      return game;
    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || err.message || '创建异步游戏失败';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const checkGameStatus = useCallback(async (gameId: string) => {
    try {
      const status = await gameService.getGameStatus(gameId);
      setCurrentGame(status);
      return status;
    } catch (err: any) {
      const errorMessage = err.response?.data?.detail || err.message || '获取游戏状态失败';
      setError(errorMessage);
      throw err;
    }
  }, []);

  const resetGame = useCallback(() => {
    setCurrentGame(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    currentGame,
    loading,
    error,
    createGame,
    createGameAsync,
    checkGameStatus,
    resetGame,
  };
};