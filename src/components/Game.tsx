import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
interface Props {
  name: string;
  released: string;
  image: string;
}

const Game: React.FC<Props> = ({ name, released, image }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    margin-top: auto;
  }
`;

export default Game;
