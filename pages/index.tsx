import Footer from "@components/Footer";
import { PlayerMarker } from "@components/PlayerMarker";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import type { Player } from "schema/types";
import { getMockPlayers } from "utils/players";
import { FieldBackground } from "../components/FieldBackground";

const Home: React.FunctionComponent = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const p = getMockPlayers().slice(5);
      setPlayers(p);
    };
    void fetchPlayers();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FieldBackground sport="hockey">
          {players.map((playerData) => (
            <Draggable>
              <div>
                <PlayerMarker player={playerData} isActive={true} />
              </div>
            </Draggable>
          ))}
        </FieldBackground>
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "20px",
          }}
        >
          {getMockPlayers()
            .slice(0, 5)
            .map((playerData) => (
              <Draggable>
                <div>
                  <PlayerMarker player={playerData} isActive={false} />
                </div>
              </Draggable>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
