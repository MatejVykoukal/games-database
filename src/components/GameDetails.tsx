import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GenericState } from "../redux/reducers";
import { useHistory } from "react-router-dom";
import { resizeImage } from "../resizeImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const GameDetails: React.FC = () => {
  const { details, screenShots, isLoading } = useSelector((state: GenericState) => state.details);
  const history = useHistory();

  const exitCardHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      const el = e.target;
      if (el.classList.contains("close")) {
        history.push("/");
      }
    }
  };

  const closeCardHandler = () => {
    history.push("/");
  };

  return (
    <>
      {!isLoading && (
        <Mask
          onClick={exitCardHandler}
          className="close"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" onClick={closeCardHandler} />

            <div className="scroll">
              <div className="stats">
                <div className="info">
                  <h2>{details!.name}</h2>
                  <p>Rating: {details!.rating}</p>
                </div>
                <h3>Platforms:</h3>
                <div className="platforms">
                  {details!.platforms.map(({ platform }) => (
                    <h3 key={platform.id}>{platform.name}</h3>
                  ))}
                </div>
              </div>
              <img src={resizeImage(details!.background_image, "1280")} alt={details!.name} />
              <p>{details!.description_raw}</p>
              <div className="gallery">
                {screenShots!.map((screenShot) => (
                  <img key={screenShot.id} src={resizeImage(screenShot.image, "1280")} alt={screenShot.image} />
                ))}
              </div>
            </div>
          </Card>
        </Mask>
      )}
    </>
  );
};

const Mask = styled(motion.div)`
  display: flex;
  cursor: pointer;
  position: fixed;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Card = styled(motion.div)`
  cursor: initial;
  height: 90vh;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 80%;
  max-width: 1100px;
  position: relative;
  margin: auto;
  color: #eee;
  background-color: #2e2e2e;
  h2 {
    padding: 2rem 0;
    max-width: 70%;
  }
  h3 {
    padding-bottom: 2rem;
  }
  p {
    padding: 2rem 0;
  }

  .stats {
    width: 100%;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .platforms {
    display: flex;
    * {
      padding-right: 1rem;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 0.4rem;
    grid-row-gap: 0.4rem;
    margin-bottom: 2rem;
  }

  .scroll {
    padding: 0 5rem;
    /* margin-bottom: 2rem; */
    height: calc(100% - 3.5rem);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c24141;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: #747474;
    }
  }
  img {
    width: 100%;
  }

  svg {
    display: block;
    margin: 1.5rem 2rem 0 auto;
    cursor: pointer;
  }
`;

export default GameDetails;
