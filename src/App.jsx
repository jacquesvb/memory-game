import { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Banner from "./components/Banner";
import StartModal from "./components/StartModal";
import { createPlayDeck, CardData, CardQuantity } from "./util/game-util";
import { GAME_STATUS } from "./constants";

function App() {
  const [deck, setDeck] = useState([]);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.SHUFFLING);
  const [playDeckSize, setPlayDeckSize] = useState(2);
  const [endMessage, setEndMessage] = useState("Too Bad!");
  const cardQuantity = CardQuantity();

  const shuffling = (numberSelected) => {
    setPlayDeckSize(numberSelected);
    const deckSize = numberSelected;
    // Randomized data
    CardData().sort(() => Math.random() - 0.5);
    let tmp = createPlayDeck(CardData(), deckSize);
    setDeck(tmp);
    setGameStatus(GAME_STATUS.CREATING);
  };

  const getPlayDeckSize = (numberSelected) => {
    shuffling(numberSelected);
  };

  const quitGame = () => {
    setEndMessage("Too Bad!");
    setGameStatus(GAME_STATUS.FINISHED);
  };

  const gameFinished = () => {
    setEndMessage("Winner winner chicken dinner!");
    setGameStatus(GAME_STATUS.FINISHED);
  };

  const resetGame = () => {
    setGameStatus(GAME_STATUS.RESETTING);
    setGameStatus(GAME_STATUS.SHUFFLING);
  };

  const setGameInProgress = () => {
    setGameStatus(GAME_STATUS.IN_PROGRESS);
  };

  return (
    <div>
        <Container fixed>
            <Header style={{ flexGrow: 1 }} handleClick={quitGame} />
            <div>
                <GameBoard
                    gameStatus={gameStatus}
                    handleStart={setGameInProgress}
                    handleFinish={gameFinished}
                    playDeck={deck}
                    playDeckSize={playDeckSize} 
                />
                {gameStatus === GAME_STATUS.FINISHED && (
                    <div>
                        <Banner handleClick={resetGame} endMessage={endMessage} />
                    </div>
                )}
                {gameStatus === GAME_STATUS.SHUFFLING && (
                    <StartModal
                        gameStatus={gameStatus}
                        getPlayDeckSize={getPlayDeckSize}
                        cardQuantity={cardQuantity} 
                    />
                )}
            </div>
        </Container>
    </div>
  );
}

export default App;
