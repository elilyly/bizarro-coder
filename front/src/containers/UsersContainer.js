import React, { Component } from 'react'
import UsersApp from '../UsersApp'
// import UserForm from '../UserForm'

import { fetchUsers, createUser }  from '../api'

class UsersContainer extends Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetchUsers()
      .then( users => this.setState({
        users: users
      }) )
  }

  handleAddUser(username, firstName, lastName, password){
    createUser(username, firstName, lastName, password)
      .then( user => this.setState( prevState =>  ({ users: [...prevState.users, user] }) ))
      .catch(e => console.log(e))
  }

  render(){
    return (
      <UsersApp users={this.state.users} onSubmit={this.handleAddUser.bind(this)} />
    )
  }
}

export default UsersContainer
