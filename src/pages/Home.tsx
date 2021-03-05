import { motion } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GameModel } from "../interfaces/GameModel";
import Game from "../components/Game";
import { currentDate, prevDate } from "../date";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../redux/actions/getGamesAction";
import GameDetails from "../components/GameDetails";
import { GenericState } from "../redux/reducers";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    games: { popularGames, upcomingGames, newGames },
    details: { details },
  } = useSelector((state: GenericState) => state);
  console.log(prevDate, currentDate);

  return (
    <GamesList>
      {details && <GameDetails />}
      <h2>Popular Games</h2>
      <Games>
        {popularGames &&
          popularGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} id={id} />
          ))}
      </Games>
      <h2>Upcoming Games</h2>
      <Games>
        {upcomingGames &&
          upcomingGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} id={id} />
          ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames &&
          newGames.map(({ name, id, released, background_image }: GameModel) => (
            <Game key={id} name={name} released={released} image={background_image} id={id} />
          ))}
      </Games>
    </GamesList>
  );
};

const GamesList = styled(motion.div)`
  padding: 0 5rem;
  & > h2 {
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
