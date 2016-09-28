import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

class Guidelines extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    if (ReactDOM.findDOMNode(this.refs.agree).checked === true) {
      browserHistory.push('/questions');
    } else {
      console.log('not checked');
    }
  }

  render() {
    return (
         <div>
          <input type="checkbox" name="checkbox" value="check" ref="agree" />
            I have read and agree to the Terms and Conditions and Privacy Policy
          <form onSubmit = { this.handleSubmit.bind(this) }>
            <input type = "submit" value = "Enter Quiz" id = "butt" />
          </form>
         </div>
      );
  }
}

export default Guidelines;
