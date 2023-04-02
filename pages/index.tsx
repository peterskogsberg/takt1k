import { useTeams } from "@components/context/useTeams";
import { Footer } from "@components/Footer";
import { ObjectMarker } from "@components/ObjectMarker";
import { PlayerMarker } from "@components/PlayerMarker";
import Head from "next/head";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { FOOTBALL_CONFIGURATION, HOCKEY_CONFIGURATION } from "schema/sports";
import type { SportConfiguration } from "schema/types";
import { FieldBackground } from "../components/FieldBackground";
import packageJSON from "../package.json";
import { TopAppBar } from "@components/appbar/TopAppBar";
import { BLOCK_CLASS } from "@components/recorder/config";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";


const Takt1k: React.FunctionComponent = () => {
  const [sport, setSport] = useState<SportConfiguration>(HOCKEY_CONFIGURATION);
  const { homeTeam, awayTeam } = useTeams();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
            {/* <Typography>{children}</Typography> */}
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className={`container`}>
      <Head>
        <title>{packageJSON.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAppBar />
      {/* <button onClick={() => setSport(FOOTBALL_CONFIGURATION)}>Football</button> */}
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          top: "64px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab icon={<RadioButtonCheckedIcon />} aria-label="record" />
              <Tab icon={<PlayArrowIcon />} aria-label="play" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <FieldBackground sport={sport}>
                {homeTeam.players.map((player, index) => (
                  <Draggable key={`draggable-home-player-${index}`}>
                    <div>
                      <PlayerMarker {...{ player }} isActive={true} />
                    </div>
                  </Draggable>
                ))}
              </FieldBackground>
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "80px",
                }}
              >
                {awayTeam.players.map((player, index) => (
                  <Draggable key={`draggable-away-player-${index}`}>
                    <div>
                      <PlayerMarker {...{ player }} isActive={false} />
                    </div>
                  </Draggable>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </main>
      <Footer />
    </div>
  );
};

export default Takt1k;
