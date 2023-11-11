import { useState, useEffect } from "react";
import { generateValues } from "../utils/generateValues";
import { Generated } from "./Generated";

export const Reward = ({ average }) => {

  const [trialsToRewards, setTrialsToRewards] = useState([]);
  const [currentTrial, setCurrentTrial] = useState(0);
  useEffect(() => {
    setTrialsToRewards(generateValues(5, average, 1, average * 2));
  }, []);
  console.log(trialsToRewards);

  const trialCompleted= () => {
    setCurrentTrial((currentState) => { 
      if (currentState < trialsToRewards.length - 1) {
        return currentState + 1;
      } else {
        setTrialsToRewards(generateValues(5, average, 1, average * 2));
        return 0;
      }
    })
  }
  return (
        <Generated val={trialsToRewards[currentTrial]} onComplete={trialCompleted} />
  )
}