// import React, { Component } from 'react'
//
// import UsersApp from '../components/UsersApp'
//
// import { fetchUsers, createUser }  from '../api'
//
// class UsersContainer extends Component {
//
//   constructor(){
//     super()
//     this.state = {
//       users: []
//     }
//
//   }
//
//   componentDidMount(){
//     fetchUsers()
//       .then( users => this.setState({
//         users: users
//       }) )
//   }
//
//   handleAddUser(name){
//     createUser(name)
//       .then( student => this.setState( prevState =>  ({ users: [...prevState.users, student] }) ))
//       .catch(e => console.log(e))
//   }
//
//   render(){
//     return (
//       < UsersApp users={this.state.users} onSubmit={this.handleAddUser.bind(this)} />
//     )
//   }
// }
//
// export default UsersContainer
