import React, { Component } from 'react'
import UsersApp from '../UsersApp'
// import UserForm from '../UserForm'
import { Route, Redirect, Switch } from 'react-router-dom'
// import ProfileCard from '../ProfileCard'
import { fetchUsers, createUser }  from '../api'

class UsersContainer extends Component {
  componentDidMount(){
    if (localStorage.getItem('jwt')) {
      this.props.history.push('/profile')
    }
    // fetchUsers()
    //   .then(user => this.setState({
    //     currentUser: user
    //   }) )
  }

  handleAddUser(username,firstName, lastName, password) {
    createUser(username,firstName, lastName, password)
      .then(res => {
        const { user, token } = res;
        this.props.setCurrentUser(
          user,
          () => this.props.history.push('/profile')
        )
      })
      .catch(e => console.log(e))
  }

  render(){
    return (
      <div>
        <UsersApp onSubmit={this.handleAddUser.bind(this)} />
      </div>
    )
  }
}

export default UsersContainer
