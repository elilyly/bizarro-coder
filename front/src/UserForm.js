import React from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class UserForm extends React.Component {

  constructor(props){
    super()
    this.state = { user: ''}

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(e){
    this.setState({
      user: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(this.state.user);
    this.props.onSubmit( this.state.user )
    this.setState({user: ''})
  }

  render(){
    return (
      <Form>
        <Form.Field>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Username</label>
          <input placeholder='Username' type='text' value={this.state.user} onChange={this.handleInputChange}/>
          <input type='submit' value='Sign in'/>
        </form>
        </Form.Field>
      </Form>
    )
  }
}
