import React, { Component } from 'react'
import Question from '../Question'
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
    console.log("hi");
    fetchQuestions()
    .then( questions => this.setState({
      questions: questions
    }))
  }

  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/questions' render={() =>  <Question questions={this.state.questions}/>}/>
          <Route path='/questions/:id' render={({match}) => {
            const question = this.state.questions.find(question => question.id === parseInt(match.params.id))
              return <QuestionShow question={question}/> }}
          />
        </Switch>
      </div>
    )
  }
}
export default QuestionsContainer
