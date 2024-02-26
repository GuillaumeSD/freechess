import { Grid, Typography } from "@mui/material";
import { useGameDatabase } from "@/hooks/useGameDatabase";
import { useAtomValue } from "jotai";
import { gameAtom } from "../../states";
import PlayerInfo from "./playerInfo";

export default function GamePanel() {
  const { gameFromUrl } = useGameDatabase();
  const game = useAtomValue(gameAtom);

  const hasGameInfo = gameFromUrl !== undefined || !!game.header().White;

  if (!hasGameInfo) return null;

  return (
    <Grid
      item
      container
      xs={12}
      justifyContent="center"
      alignItems="center"
      gap={1}
    >
      <Grid item container xs={12} justifyContent="center" alignItems="center">
        <PlayerInfo color="white" />

        <Typography marginX={1.5}>vs</Typography>

        <PlayerInfo color="black" />
      </Grid>

      <Grid
        item
        container
        xs={11}
        justifyContent="space-evenly"
        alignItems="center"
        rowGap={1}
        columnGap={3}
      >
        <Typography>
          Site : {gameFromUrl?.site || game.header().Site || "?"}
        </Typography>

        <Typography>
          Date : {gameFromUrl?.date || game.header().Date || "?"}
        </Typography>

        <Typography>
          Result :{" "}
          {gameFromUrl?.termination || game.header().Termination || "?"}
        </Typography>
      </Grid>
    </Grid>
  );
}
