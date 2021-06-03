import { EVENTS } from "./ReducerEvents";

export const initialState = {
  currentQuestionIndex: 0,
  name: "",
  score: 0,
  startTime: null,
  time: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case EVENTS.LOGIN:
      return {
        ...state,
        name: action.name,
        startTime: new Date(),
      };
    case EVENTS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case EVENTS.ADD_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case EVENTS.FINISH_GAME:
      return {
        ...state,
        time: action.time,
      };
    default:
      return state;
  }
};

export default reducer;
