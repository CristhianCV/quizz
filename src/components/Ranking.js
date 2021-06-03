import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../context/DataLayer";
import { db } from "../config/firestore";
import Loader from "../assets/loader.gif";

const Ranking = () => {
  const [{ name, score, time }, dispatch] = useDataLayerValue();
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    const savePlayer = () => {
      db.collection("players")
        .add({
          name: name,
          score: score,
          time: time,
        })
        .then((docRef) => {
          getPlayers();
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    };

    const getPlayers = () => {
      db.collection("players")
        .orderBy("score", "desc")
        .orderBy("time", "asc")
        .get()
        .then((querySnapshot) => {
          setPlayers(querySnapshot);
          setLoading(false);
        });
    };

    savePlayer();
  }, []);

  return loading ? (
    <div className="m-auto p-4 box-container">
      <img alt="loading" src={Loader}></img>
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-full max-w-3xl m-auto p-6">
      <div className="p-4 box-container">
        <h1 className="text-center text-lg font-bold">🏆 RANKING 🏆</h1>
      </div>
      <div className="flex flex-col p-4 box-container">
        <div className="grid grid-cols-footer py-4 font-semibold">
          <div>
            <h3 className="text-center">#</h3>
          </div>
          <div>
            <h3>Player</h3>
          </div>
          <div>
            <h3 className="text-center">Time</h3>
          </div>
          <div>
            <h3 className="text-center">Score</h3>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto">
          {players.docs.map((element, index) => {
            return (
              <div
                key={element.id}
                className="grid grid-cols-footer py-4 cursor-pointer hover:bg-gray-300"
              >
                <div>
                  <p className="text-center">{index + 1}</p>
                </div>
                <div>
                  <p>{element.data().name}</p>
                </div>
                <div>
                  <p className="text-center">{`${
                    Math.round(element.data().time / 60) > 9 ? "" : "0"
                  }${Math.round(element.data().time / 60)}:${
                    element.data().time % 60 > 9 ? "" : "0"
                  }${element.data().time % 60}`}</p>
                </div>
                <div>
                  <p className="text-center">{element.data().score}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 box-container">
        <div className="grid grid-cols-footer font-semibold">
          <div>
            <p className="text-center">You</p>
          </div>
          <div>
            <p>{name}</p>
          </div>
          <div>
            <p className="text-center">{`${
              Math.round(time / 60) > 9 ? "" : "0"
            }${Math.round(time / 60)}:${time % 60 > 9 ? "" : "0"}${
              time % 60
            }`}</p>
          </div>
          <div>
            <p className="text-center">{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
