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

const Takt1k: React.FunctionComponent = () => {
  const [sport, setSport] = useState<SportConfiguration>(HOCKEY_CONFIGURATION);
  const { homeTeam, awayTeam } = useTeams();

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
        <FieldBackground sport={sport}>
          {homeTeam.players.map((player, index) => (
            <Draggable key={`draggable-home-player-${index}`}>
              <div>
                <PlayerMarker {...{ player }} isActive={true} />
              </div>
            </Draggable>
          ))}
          <Draggable>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ObjectMarker sport={sport} />
            </div>
          </Draggable>
          </FieldBackground>
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
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
      </main>
      <Footer />
    </div>
  );
};

export default Takt1k;
