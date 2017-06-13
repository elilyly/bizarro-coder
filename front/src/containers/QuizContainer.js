import React, { Component } from 'react'
import QuizSelection from '../QuizSelection'
import Quiz from '../Quiz'
import { fetchQuestions }  from '../api/index'
import { Route, Redirect, Switch } from 'react-router-dom'

class QuizContainer extends Component {
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
          <Route exact path='/quizzes/ruby' render={() =>  <Quiz questions={this.state.questions}/>}/>
          <Route exact path='/quizzes/javascript' render={() =>  <Quiz questions={this.state.questions}/>}/>
          <Route path='/quizzes' render={({match}) => {
            const quiz = this.state.questions.find(question => question.id === parseInt(match.params.id))
            return <QuizSelection question={quiz} /> }}
           />
        </Switch>
      </div>
    )
  }
}
export default QuizContainer
