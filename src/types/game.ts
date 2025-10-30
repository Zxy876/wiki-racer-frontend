export interface GameResultProps {
  result: {
    path: string[];
    duration: number;
    start: string;
    end: string;
    achievements?: Achievement[];
  };
  onPlayAgain: () => void;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Page {
  title: string;
  url: string;
}
