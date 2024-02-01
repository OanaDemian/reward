import { useState } from "react";
import { AverageSelection } from "./AverageSelection";
import { Reward } from "./Reward";

export const RewardGiver = () => {
  const [average, setAverage] = useState(undefined);
  return (
    <>
      {typeof average === "undefined" ? (
        <AverageSelection setAverage={setAverage} />
      ) : (
        <Reward average={average} setAverage={setAverage} />
      )}
    </>
  );
};
