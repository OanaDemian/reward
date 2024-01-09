import { useState, useEffect } from "react";
import { generateValues } from "../utils/generateValues";
import { Generated } from "./Generated";
import { CloseRewardView } from "./CloseRewardView";
import { Stack } from '@mui/material';


export const Reward = ({ average, setAverage }) => {

  const [trialsToRewards, setTrialsToRewards] = useState([]);
  const [currentTrial, setCurrentTrial] = useState(0);
  useEffect(() => {
    setTrialsToRewards(generateValues(5, average, 1, average * 2));
  }, []);

  const trialCompleted = () => {
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
    <Stack  spacing={{ xs: 1, sm: 2, md: 4 }} direction="column" flexWrap="wrap">
      <CloseRewardView setAverage={setAverage}/>
      <Generated val={trialsToRewards[currentTrial]} onComplete={trialCompleted} />
   </Stack>
  )
}