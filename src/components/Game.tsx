import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getDetails } from "../redux/actions/getDetailsAction";
import { resizeImage } from "../resizeImage";

interface Props {
  name: string;
  released: string;
  image: string;
  id: number;
}

const Game: React.FC<Props> = ({ name, released, image, id }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFetchDetails = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(getDetails(id));
    history.push(`/game/${id}`);
  };

  return (
    <StyledGame onClick={handleFetchDetails}>
      <div>
        <h3>{name}</h3>
        <p>{released}</p>
      </div>
      <img src={resizeImage(image, "640")} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  background-color: #202020;
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 0px 40px rgb(100 100 100 / 10%);
  border-radius: 0.5rem;
  overflow: hidden;
  justify-content: space-between;
  text-align: center;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: none;
  }
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    margin-top: auto;
  }
  h3 {
    padding: 2rem;
    padding-bottom: 1rem;
  }
`;

export default Game;
