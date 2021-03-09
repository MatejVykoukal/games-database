import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { GameModel } from "../interfaces/GameModel";
import Game from "../components/Game";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../redux/actions/getGamesAction";
import GameDetails from "../components/GameDetails";
import { GenericState } from "../redux/reducers";
import { useLocation } from "react-router";
import { getDetails } from "../redux/actions/getDetailsAction";

const Home = () => {
  const dispatch = useDispatch();

  const {
    games: { popularGames, upcomingGames, newGames },
    details: { details },
  } = useSelector((state: GenericState) => state);

  const { pathname: path } = useLocation();

  const pathId = path.split("/")[2];

  useEffect(() => {
    dispatch(getGames);
    if (pathId) {
      dispatch(getDetails(+pathId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    pathId ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "auto");
  }, [pathId]);

  return (
    <GamesList>
      <AnimatePresence>{pathId && details && <GameDetails />}</AnimatePresence>
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
  padding: 1rem 5rem;
  background-color: #151515;
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
