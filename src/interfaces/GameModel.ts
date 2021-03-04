interface GamePlatform {
  platform: { id: number; name: string; slug: string };
  released_at: string;
}

interface GameScreenshot {
  id: null;
  image: string;
}

interface GameTag {
  id: number;
  name: string;
  slug: string;
  games_count: number;
}

export interface GameModel {
  added: number;
  background_image: string;
  clip: null;
  dominant_color: string;
  id: number;
  name: string;
  platforms: GamePlatform[];
  playtime: number;
  rating: number;
  rating_top: number;
  released: string;
  reviews_count: number;
  saturated_color: string;
  short_screenshots: GameScreenshot[];
  slug: string;
  tags: GameTag[];
}
