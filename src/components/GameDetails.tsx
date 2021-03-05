import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GenericState } from "../redux/reducers";
import { Link } from "react-router-dom";

const GameDetails = () => {
  const { details, screenShots } = useSelector((state: GenericState) => state.details);
  return (
    <Link to="/">
      <Mask>
        <Card>
          <h2>{details!.name}</h2>
          <p>Rating: {details!.rating}</p>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {details!.platforms.map(({ platform }) => (
                <h3 key={platform.id}>{platform.name}</h3>
              ))}
            </div>
            <img src={details!.background_image} alt={details!.name} />
            <p>{details!.description_raw}</p>
            <div className="gallery">
              {screenShots!.map((screenShot) => (
                <img key={screenShot.id} src={screenShot.image} alt={screenShot.image} />
              ))}
            </div>
          </div>
        </Card>
      </Mask>
    </Link>
  );
};

const Mask = styled(motion.div)`
  position: fixed;
  overflow-y: scroll;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Card = styled(motion.div)`
  border-radius: 2rem;
  width: 80%;
  position: absolute;
  left: 10%;
  padding: 2rem 10rem;
  color: black;
  background-color: white;
  img {
    width: 100%;
  }
`;

export default GameDetails;
