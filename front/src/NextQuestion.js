import React, { Component } from 'react'
import { Button, Progress, Form, TextArea  } from 'semantic-ui-react'
//fetch questions again
//.find, the next question
//POST or GET, POST to handle checking


export default class NextQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: 0,
      input: ''
     }
  }
  handleInputChange(e){
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    input: this.state.input
    this.setState({
      input: ''
    })
    // redirect to question:id 2
  }

// App -> quizSlection->ruby/JS> quesiont1> 2

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
  })

  render() {
    return (
      <div centered>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <TextArea placeholder="Enter Answer..." autoHeight onChange={this.handleInputChange.bind(this)} />
        <Progress percent={this.state.percent} />
        <Button type="submit" onClick={this.increment}>Next</Button>
      </Form>
      </div>
    )
  }
}
