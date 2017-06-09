import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import UserForm from './UserForm'

function UsersApp(props) {
  const nameEls = props.users.map( (user, i) =>
    <li key={i}>{user.username}</li>
  )

  return (
      <div>
        <div className='col-md-4'>
          <ul>
            { nameEls }
          </ul>
          {/* <Switch>
            <Route path="/users" render={() => <Link to="/users/new">Add User</Link>} />
          </Switch> */}
        </div>
        <div className='col-md-8'>
          <Switch>
            <Route path="/login" render={() => < UserForm  onSubmit={ props.onSubmit }/>}/>
            {/* <Route path="/users/:id" render={({match}) => {
              const user = props.users.find(user => user.id === parseInt(match.params.id))
              return <h1>{user.name}</h1>}
            }/> */}
          </Switch>
        </div>
      </div>
  )
}

export default UsersApp
