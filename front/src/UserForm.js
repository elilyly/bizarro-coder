import React from 'react'
import { Button, Container, Form, Grid, Header, Icon, Input } from 'semantic-ui-react'
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
      password: ''

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
  //
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
// this.state.firstName, this.state.lastName,
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
      <div className="wow">
        <Grid columns={8}>
          <Grid.Column></Grid.Column>
          <Grid.Column width={6}>
                <Header.Content>
                 <p>Sign Up</p>
              </Header.Content>
            <Grid.Row><br/><br/>
            <Form>
              <Form.Field>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <Input transparent placeholder='Username' size='medium' type='text' value={this.state.user} onChange={this.handleUserChange}/><br />
                  <br />
                  <br />
                  <Input transparent placeholder='First Name' size='medium' type='text' value={this.state.firstName} onChange={this.handleFirstNameChange}/><br />
                  <br />
                  <br />
                  <Input transparent placeholder='Last Name' size='medium' type='text' value={this.state.lastName} onChange={this.handleLastNameChange}/><br />
                  <br />
                  <br />
                  <Input transparent placeholder='Password' size='medium' type='password' value={this.state.password} onChange={this.handlePasswordChange}/>
                  <br />
                  <br /><Button type='submit' content='Create Account' />
                </form>
              </Form.Field>
            </Form>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Route path='/profile' render={() =>  <ProfileCard user={this.state.user}/>}  />
    </div>
    )
  }
}
