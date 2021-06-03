import React from "react";
import { useDataLayerValue } from "../context/DataLayer";
import { questions } from "../config/questions.json";
import { ACTIONS } from "../context/ReducerEvents";
import { navigate } from "@reach/router";

const Question = () => {
  const [{ currentQuestionIndex, startTime }, dispatch] = useDataLayerValue();

  const onClickOption = (id) => {
    if (questions[currentQuestionIndex].correctIndex === id) {
      dispatch(ACTIONS.addScore());
    }
    if (currentQuestionIndex + 1 === questions.length) {
      let timeInSeconds = Math.round((new Date() - startTime) / 1000);
      dispatch(ACTIONS.finishGame(timeInSeconds));
      navigate("/results");
    } else {
      dispatch(ACTIONS.nextQuestion());
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-3xl m-auto p-6">
      <div className="flex items-center h-28 p-4 box-container">
        <h2 className="w-full text-center text-lg font-bold">
          {`${currentQuestionIndex + 1}. ${
            questions[currentQuestionIndex].question
          }`}
        </h2>
      </div>
      <div className="h-64 w-full">
        <img
          alt="Question image"
          src={questions[currentQuestionIndex].image}
          className="h-full object-cover mx-auto box-container"
        ></img>
      </div>
      <div className="grid gap-4 grid-cols-2">
        {questions[currentQuestionIndex].answers.map((answer) => {
          return (
            <div
              key={answer.id}
              className="p-4 cursor-pointer box-container hover:bg-gray-300"
              onClick={() => onClickOption(answer.id)}
            >
              <h3>{answer.description}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
