import { combineReducers } from 'redux';

const ADD_C = 'Correct Answer';
const ADD_W = 'Wrong Answer';
const ADD_NEW = 'Add Question to Store';

let correctAnswers = 0;
let wrongAnswers = 0;
let questionNo = 5;

const initialState = [
  {
    questionNo: 1,
    question: 'First question',
    options: ['1', '2', '3', '4'],
    correctAnswer: '2',
  },
  {
    questionNo: 2,
    question: 'Second question',
    options: ['5', '6', '7', '8'],
    correctAnswer: '5',
  },
  {
    questionNo: 3,
    question: 'Third question',
    options: ['9', '10', '11', '12'],
    correctAnswer: '11',
  },
  {
    questionNo: 4,
    question: 'Fourth question',
    options: ['13', '14', '15', '16'],
    correctAnswer: '16',
  },
  {
    questionNo: 5,
    question: 'Fifth question',
    options: ['17', '18', '19', '20'],
    correctAnswer: '18',
  },
];

export function questionToAdd(question, options, correctAnswer) {
  return {
    questionNo: questionNo++,
    question: question,
    options: options,
    correctAnswer: correctAnswer,
  };
}

export function enterToStore(questionNo, optionSelected, correction) {
  let actionType = '';
  if (correction === true) {
    actionType = ADD_C;
  } else {
    actionType = ADD_W;
  }

  return {
    type: type,
    questionNo: questionNo,
    optionSelected: optionSelected,
  };
}

function questionAdd(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW:
      return [
            ...state,
            {
              questionNo: action.questionNo,
              question: action.question,
              options: action.options,
              correctAnswer: action.correctAnswer,
            },
         ];
    default:
      return state;
  }
}

function enterAnswer(state = [], action) {
  switch (action.type) {
    case ADD_C:
      return [
        ...state,
        {
          questionNo: action.questionNo,
          optionSelected: action.optionSelected,
          correctAnswers: correctAnswers++,
          wrongAnswers: wrongAnswers,
        },
      ];
    case ADD_C:
      return [
        ...state,
        {
          questionNo: action.questionNo,
          optionSelected: action.optionSelected,
          correctAnswers: correctAnswers,
          wrongAnswers: wrongAnswers++,
        },
      ];
    default:
      return state;
  }
}

const loadToStore = combineReducers({
  questionAdd,
  enterAnswer,
});

export default loadToStore;
