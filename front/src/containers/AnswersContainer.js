import React, { Component } from 'react'
import Answer from '../Answer'
import { fetchAnswers }  from '../api/index'

class AnswersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    fetchAnswers()
    .then( answers => this.setState({
      answers: answers
    }))
  }

  render() {
    return(
      <div>
        <Answer answers={this.state.answers}/>
      </div>
    )
  }

}
export default AnswersContainer
