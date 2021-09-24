import React from 'react'
import ReactDice from 'react-dice-roller';

export const SkillSheet = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [dice, setDice] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const numbers = [1, 2, 3, 4, 5, 6];


  return (
    <div className="min-w-screen min-h-screen bg-tavern bg-no-repeat  bg-cover overflow-y-auto flex justify-center items-center">
      
    </div>
  )
}
