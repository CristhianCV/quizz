export const EVENTS = {
  LOGIN: "LOGIN",
  NEXT_QUESTION: "NEXT_QUESTION",
  ADD_SCORE: "ADD_SCORE",
  FINISH_GAME: "FINISH_GAME",
};

export const ACTIONS = {
  login: (name) => ({
    type: EVENTS.LOGIN,
    name,
  }),
  nextQuestion: () => ({
    type: EVENTS.NEXT_QUESTION,
  }),
  addScore: () => ({
    type: EVENTS.ADD_SCORE,
  }),
  finishGame: (time) => ({
    type: EVENTS.FINISH_GAME,
    time,
  }),
};
