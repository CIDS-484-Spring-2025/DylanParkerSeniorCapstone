import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate to navigate back to Home
import './FunGame.css';

const initialEmojis = ['🏀', '🏈', '⚾️', '🏒', '⚽️', '🎾', '⛳️', '🏏', '🥎', '🏋️‍♂️'];
const shuffledEmojis = [...initialEmojis, ...initialEmojis]
  .sort(() => Math.random() - 0.5)
  .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));

function FunGame() {
  const navigate = useNavigate();  // Initialize the navigate function
  const [cards, setCards] = useState(shuffledEmojis);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCount, setMatchedCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].matched = true;
          updated[second].matched = true;
          setCards(updated);
          setMatchedCount((prev) => prev + 1);
          setFlippedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          const updated = [...cards];
          updated[first].flipped = false;
          updated[second].flipped = false;
          setCards(updated);
          setFlippedCards([]);
        }, 800);
      }
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  useEffect(() => {
    if (matchedCount === initialEmojis.length) {
      setGameStarted(false);  // Stop the timer once the game is finished
    }
  }, [matchedCount]);

  const handleCardClick = (index) => {
    if (cards[index].flipped || cards[index].matched || flippedCards.length === 2) return;

    if (!gameStarted) {
      setGameStarted(true);  // Start the game when the first card is flipped
    }

    const updated = [...cards];
    updated[index].flipped = true;
    setCards(updated);
    setFlippedCards([...flippedCards, index]);
  };

  const resetGame = () => {
    const resetCards = [...initialEmojis, ...initialEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji, flipped: false, matched: false }));
    setCards(resetCards);
    setFlippedCards([]);
    setMatchedCount(0);
    setTimer(0);
    setGameStarted(false);
  };

  return (
    <div className="fun-game-container">
      <button onClick={() => navigate('/')} className="home-button">Go to Home</button>
      <h1>Sports Emoji Memory Game</h1>
      <p>Match all the sports emoji pairs!</p>
      <p>Time: {timer} seconds</p>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped || card.matched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
      {matchedCount === initialEmojis.length && (
        <div className="win-message">
          <p>You matched them all in {timer} seconds!</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default FunGame;
