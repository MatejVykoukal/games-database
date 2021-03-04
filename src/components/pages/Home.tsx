import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/reducers/gamesReducer";
import { GameModel } from "../../interfaces/GameModel";
import Game from "../Game";
import { currentDate, prevDate } from "../../date";

const Home = () => {
  const { popularGames, upcomingGames, newGames } = useSelector((state: { games: State }) => state.games);
  console.log(prevDate, currentDate);

  return (
    <GamesList>
      <h2>Popular Games</h2>
      <Games>
        {popularGames &&
          popularGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} />
          ))}
      </Games>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames &&
          upcomingGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} />
          ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {popularGames &&
          popularGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} />
          ))}
      </Games>
    </GamesList>
  );
};

const GamesList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
