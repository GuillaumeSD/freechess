import { useChessActions } from "@/hooks/useChess";
import Board from "@/sections/analysis/board";
import ReviewPanelBody from "@/sections/analysis/reviewPanelBody";
import ReviewPanelHeader from "@/sections/analysis/reviewPanelHeader";
import ReviewPanelToolBar from "@/sections/analysis/reviewPanelToolbar";
import {
  boardAtom,
  boardOrientationAtom,
  gameAtom,
  gameEvalAtom,
} from "@/sections/analysis/states";
import { Divider, Grid } from "@mui/material";
import { Chess } from "chess.js";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function GameReport() {
  const { reset: resetBoard } = useChessActions(boardAtom);
  const { setPgn: setGamePgn } = useChessActions(gameAtom);
  const setEval = useSetAtom(gameEvalAtom);
  const setBoardOrientation = useSetAtom(boardOrientationAtom);
  const router = useRouter();
  const { gameId } = router.query;

  useEffect(() => {
    if (!gameId) {
      resetBoard();
      setEval(undefined);
      setBoardOrientation(true);
      setGamePgn(new Chess().pgn());
    }
  }, [gameId, setEval, setBoardOrientation, resetBoard, setGamePgn]);

  return (
    <Grid
      container
      rowGap={6}
      justifyContent="center"
      alignItems="start"
      gap={6}
    >
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        xs={12}
        md
      >
        <Board />
      </Grid>

      <Grid
        item
        container
        marginTop={{ xs: 0, md: "2.5em" }}
        justifyContent="center"
        alignItems="center"
        xs={12}
        md
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          borderRadius={2}
          border={1}
          borderColor={"secondary.main"}
          xs={12}
          sx={{
            backgroundColor: "secondary.main",
            borderColor: "primary.main",
            borderWidth: 2,
          }}
          padding={3}
          gap={3}
        >
          <ReviewPanelHeader />

          <Divider sx={{ width: "90%" }} />

          <ReviewPanelBody />

          <Divider sx={{ width: "90%" }} />

          <ReviewPanelToolBar />
        </Grid>
      </Grid>
    </Grid>
  );
}
