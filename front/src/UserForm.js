import React from 'react'
import { Button, Form, Grid, Header, Icon } from 'semantic-ui-react'
import { Link, Switch, Route } from 'react-router-dom'
export default class UserForm extends React.Component {

  constructor(props){
    super(props)
    this.state = { user: ''
  }

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
      <Grid centered>
        <Grid.Row container centered><br/><br/>
        <Header as='h2'>
          <Icon name='sign in'/>
          <Header.Content>
            Sign In
          </Header.Content>
        </Header>
        <Grid.Row container centered><br/><br/>
      <Form>
        <Form.Field>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='Username' type='text' value={this.state.user} onChange={this.handleInputChange}/>
          <Link to='/profile'><Button basic color="blue">Sign Up</Button></Link>
        </form>
        </Form.Field>
      </Form>
    </Grid.Row>
    </Grid.Row>
  </Grid>
    )
  }
}
