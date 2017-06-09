import React, { Component } from 'react'
import QuestionShow from '../QuestionShow'
import { fetchQuestions }  from '../api/index'
import { Route, Redirect, Switch } from 'react-router-dom'

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
        <Switch>
          <Route path='/questions/:id' render={({match}) => {
            const question = this.state.questions.find(question => question.id === parseInt(match.params.id))
            return <QuestionShow questions={this.state.questions}/> }}
          />
        </Switch>
      </div>
    )
  }
}
export default QuestionsContainer
