import React, { Component } from 'react'
import { fetchQuestions, createUserAnswers }  from './api/index'
import { Route, Redirect, Switch } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import NavBar from './NavBar'
import Question from './Question'
import QuestionShow from './QuestionShow'
import QuizSelection from './QuizSelection'
import UsersContainer from './containers/UsersContainer'
// import QuestionsContainer from './containers/QuestionsContainer'
// import AnswersContainer from './containers/AnswersContainer'
// import QuizContainer from './containers/QuizContainer'
// import Home from './Home'
// import Help from './Help'

class Main extends Component {
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

  // handleAddUserAnswer(input){
  //   createUserAnswer(input)
  //     .then( user_answer => this.setState( prevState =>  ({ user_answers: [...prevState.user_answers, user_answer] }) ))
  //     .catch(e => console.log(e))
  // }


  render() {
    return(
      <div>
        <Switch>
          <Route path='/profile' component={ProfileCard} />
          <Route exact path='/quizzes/ruby/questions' render={() =>  <Question questions={this.state.questions}/>} />
          <Route path='/quizzes/ruby/questions/:id' render={({match}) => {
            const question = this.state.questions.find(question => question.id === parseInt(match.params.id))
              return <QuestionShow questions={question}/> }}
          />
          <Route path='/quizzes' render={() =>  <QuizSelection questions={this.state.questions}/>}
           />

          {/* <Route path='/answers' component={AnswersContainer} /> */}
           <Route path='/login' component={UsersContainer} />
          {/* <Route path='/quizzes' component={QuizContainer} />
          <Route path='/' component={Home} />
          <Route path='/help' component={Help} />  */}
          {/* <Route exact path='/help' render={() => <h1>To start a quiz press the start button</h1>} /> */}
        </Switch>
      </div>
    )
  }
}
export default Main


{/* <Route path='/quizzes' render={({match}) => {
  const quiz = this.state.questions.find(question => question.id === parseInt(match.params.id))
  return <QuizSelection question={quiz} /> }}
 /> */}
