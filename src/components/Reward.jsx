import { useState, useEffect } from "react";
import { generateValues } from "../utils/generateValues";
import { RewardWheel } from "./RewardWheel";
import { CloseRewardView } from "./CloseRewardView";
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types'; 
import PropType from 'prop-types';

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
    });
  };
  return (
    <Paper elevation={4}> 
        <CloseRewardView setAverage={setAverage} />
        <RewardWheel
          val={trialsToRewards[currentTrial]}
          onComplete={trialCompleted}
        />
    </Paper>
  );
};

Reward.propTypes = {
  average: PropTypes.oneOfType([PropType.number, PropType.string]),
  setAverage: PropTypes.func
}