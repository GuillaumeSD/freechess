import { Grid, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { gameEvalAtom } from "../states";

export default function Accuracies() {
  const gameEval = useAtomValue(gameEvalAtom);

  if (!gameEval) return null;

  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      columnGap={{ xs: "8vw", sm: 6, md: 8 }}
    >
      <Typography
        align="center"
        sx={{ backgroundColor: "white", color: "black" }}
        borderRadius="5px"
        lineHeight={1}
        padding={1}
      >
        {`${gameEval?.accuracy.white.toFixed(1)} %`}
      </Typography>

      <Typography align="center">Accuracies</Typography>

      <Typography
        align="center"
        sx={{ backgroundColor: "black", color: "white" }}
        borderRadius="5px"
        lineHeight={1}
        padding={1}
      >
        {`${gameEval?.accuracy.black.toFixed(1)} %`}
      </Typography>
    </Grid>
  );
}