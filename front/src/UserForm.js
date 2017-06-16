import React from 'react'
import { Button, Container, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
import ProfileCard from './ProfileCard'

export default class UserForm extends React.Component {

  constructor(props){
    super()
    this.state = {
      user: '',
      // username: '',
      firstName: '',
      lastName: '',
      password: '',

  }
    this.handleUserChange = this.handleUserChange.bind(this)
    // this.handleUserNameChange = this.handleUserNameChange.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleUserChange(e){
    this.setState({
      user: e.target.value
    })
  }

  handleFirstNameChange(e){
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange(e){
    this.setState({
      lastName: e.target.value
    })
  }
  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(this.state.user);
    this.props.onSubmit( this.state.user, this.state.firstName, this.state.lastName, this.state.password)
    this.setState({
      user: '',
      firstName: '',
      lastName: '',
      password: ''
    })
  }

  render(){
    return (
<div>
      <Container text>
        <Grid centered>
          <Grid.Row container centered><br/><br/>
            <Header as='h2'>
              {/* <Icon name='sign up'/> */}
              <Header.Content>
                Create an Account
              </Header.Content>
            </Header>
          <Grid.Row container centered><br/><br/>
          <Form>
            <Form.Field>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder='Username' type='text' value={this.state.user} onChange={this.handleUserChange}/>
                <input placeholder='First Name' type='text' value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                <input placeholder='Last Name' type='text' value={this.state.lastName} onChange={this.handleLastNameChange}/>
                <input placeholder='Password' type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                <input type='submit' value='sign up'/>
              </form>
            </Form.Field>
          </Form>
        </Grid.Row>
        </Grid.Row>
      </Grid>

    </Container>
    <Route path='/profile' render={() =>  <ProfileCard user={this.state.user}/>}  />
  </div>


    )
  }
}
