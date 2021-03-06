import { currentDate, nextDate, prevDate } from "./date";

const apiKey = "468b61f4688b4c199c9845342d1f9475";
const base_url = `https://api.rawg.io/api/`;

const popular_games = `games?${apiKey}&dates=${prevDate},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?${apiKey}&dates=${currentDate},${nextDate}&ordering=released&page_size=10`;
const newGames = `games?${apiKey}&dates=${prevDate},${currentDate}&ordering=-added&page_size=10`;

export const gamesURL = (type: "popular" | "upcoming" | "new" | "details" | "screenshots", id?: number) => {
  switch (type) {
    case "popular":
      return `${base_url}${popular_games}`;
    case "upcoming":
      return `${base_url}${upcoming_games}`;
    case "new":
      return `${base_url}${newGames}`;
    case "details":
      return `${base_url}games/${id}`;
    case "screenshots":
      return `${base_url}games/${id}/screenshots`;
  }
};
