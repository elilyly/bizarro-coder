import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('jwt')) {
      this.props.history.push('/profile')
    }
  }

  handleChange(prop, value) {
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleLogin(this.state)
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
          <label>Password</label>
          <input type='password' value={this.state.password} onChange={e => this.handleChange('password', e.target.value)}/>
          <input type='submit' value='Log In'/>
        </form>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }


}
