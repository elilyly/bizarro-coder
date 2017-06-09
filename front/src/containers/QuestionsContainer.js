import React, { Component } from 'react'
import Question from '../Question'
import { fetchQuestions }  from '../api/index'

class QuestionsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: []
    }
  }


  componentDidMount() {
    fetchQuestions()
    .then( questions => this.setState({
      questions: questions
    }))
  }

  render() {
    return(
      <div>
        <Question questions={this.state.questions}/>
      </div>
    )
  }

}
export default QuestionsContainer
