import { useState } from "react";
import { AverageSelection } from "./AverageSelection";
import { Reward } from "./Reward";
import Box from "@mui/material/Box";

export const RewardGiver = () => {
  const [average, setAverage] = useState(undefined);
  return (
     <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "calc(100vh - 88px)",
            ml: "auto",
            mr: "auto",
            borderRadius: 1,
            p: 3,
          }}
        >
      {typeof average === "undefined" ? (
        <AverageSelection setAverage={setAverage} />
      ) : (
        <Reward average={average} setAverage={setAverage} />
      )}
     </Box>
  );
};
