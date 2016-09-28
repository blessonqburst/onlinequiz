import React from 'react';
import { browserHistory } from 'react-router';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const uname = 'b';
    const pass = 'b';
    if (uname === this.state.username && pass === this.state.password) {
      browserHistory.push('/guidelines');
    } else {
      console.log('Invalid Data');
    }

    this.setState({ username: '', password: '' });
  }

  render() {
    return (
       <div>
         <form className="LoginForm" onSubmit = { this.handleSubmit.bind(this)}>
          <label>Username: </label>
          <input
            type="text"
            value = { this.state.username }
            onChange = { this.handleUsernameChange.bind(this) }
          /><br /><br />
          <label>Password: </label>
          <input
            type="password"
            value = { this.state.password }
            onChange = { this.handlePasswordChange.bind(this) }
          /><br />
          <input type="submit"/>
        </form>
       </div>
    );
  }
}

export default App;
