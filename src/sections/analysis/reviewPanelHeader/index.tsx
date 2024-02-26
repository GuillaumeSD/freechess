import { Icon } from "@iconify/react";
import { Grid, Typography } from "@mui/material";
import GamePanel from "./gamePanel";
import LoadGame from "./loadGame";
import AnalyzeButton from "./analyzeButton";
import EngineSettingsButton from "@/sections/engineSettings/engineSettingsButton";

export default function ReviewPanelHeader() {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      xs={12}
      rowGap={3}
    >
      <Grid
        item
        container
        xs={12}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={1} />

        <Grid
          item
          container
          xs
          justifyContent="center"
          alignItems="center"
          columnGap={1}
        >
          <Icon icon="ph:file-magnifying-glass-fill" height={28} />

          <Typography variant="h5" align="center">
            Game Report
          </Typography>
        </Grid>

        <EngineSettingsButton />
      </Grid>

      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
        rowGap={3}
        columnGap={15}
      >
        <GamePanel />
        <LoadGame />
        <AnalyzeButton />
      </Grid>
    </Grid>
  );
}
