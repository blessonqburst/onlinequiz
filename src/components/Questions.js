import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

let currentQuestion = {};
let Questions = [];
let counter = 0;

class Guidelines extends React.Component {
  constructor() {
    super();
    this.state = {
      rad: false,
    };
  }

  componentWillMount() {
    Questions = this.props.questions;
    currentQuestion = Questions[counter];
  }

  componentDidMount() {
    currentQuestion = Questions[++counter];
  }

  componentDidUpdate() {
    currentQuestion = Questions[++counter];
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = document.querySelector('input[name="option"]:checked').value;
    console.log(value);
    this.setState({ rad: false });
  }

  render() {
    const { dispatch } = this.props;
    return (
         <div>
          <form onSubmit = { this.handleSubmit.bind(this) }>
            <h4>{currentQuestion.questionNo}</h4>
            {currentQuestion.question}
            <div>
              <input
                type="radio"
                name="option"
                value={currentQuestion.options[0]}
              />
              {currentQuestion.options[0]}
              <br />
              <input
                type="radio"
                name="option"
                value={currentQuestion.options[1]}
              />
              {currentQuestion.options[1]}
              <br />
              <input
                type="radio"
                name="option"
                value={currentQuestion.options[2]}
              />
              {currentQuestion.options[2]}
              <br />
              <input
                type="radio"
                name="option"
                value={currentQuestion.options[3]}
              />
              {currentQuestion.options[3]}
              <br />
            </div>
            <div>
              <input type = "submit" value = "Submit" />
            </div>
          </form>
         </div>
      );
  }
}

function select(state) {
  return {
    questions: state.questionAdd,
    answers: state.enterAnswer,
  };
}

export default connect(select)(Guidelines);
