import React, { PureComponent } from 'react'

export default class Logout extends PureComponent {
  componentDidMount() {
    localStorage.removeItem('jwt')
    this.props.setCurrentUser(
      null,
      () => this.props.history.push('/')
    );
  }

  render() {
    return (
      <div>
        <h1>Play again soon!</h1>
        <p>You are being logged out</p>
      </div>
    )
  }
}
