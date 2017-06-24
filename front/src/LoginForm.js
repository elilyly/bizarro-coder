import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, Form, Grid, Header, Input } from 'semantic-ui-react'


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
      <div >
        <Grid columns={8}>
          <Grid.Column></Grid.Column>
          <Grid.Column width={6}>
                <Header.Content>
                 <p>Log In</p>
              </Header.Content>
            <Grid.Row><br/><br/>
                <form onSubmit={this.handleSubmit}>
                  <Input transparent size='medium' placeholder='Username' type='text' value={this.state.username} onChange={e => this.handleChange('username', e.target.value)}/>
                  <br />
                  <br />
                  <Input transparent size='medium' placeholder='Password' type='password' value={this.state.password} onChange={e => this.handleChange('password', e.target.value)}/>
                  <br />
                  <br /><Button type='submit' content='Log In' />
                </form>
            <br />
            <p>Don't have an account? <Link to='/signup'> Sign Up!</Link></p>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
    )
  }
}
