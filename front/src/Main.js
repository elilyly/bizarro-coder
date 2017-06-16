import React, { Component } from 'react'
import { fetchQuestions, fetchAnswers, createUserAnswers, logIn }  from './api/index'
import { Switch, Route, withRouter } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import Question from './Question'
import QuestionShow from './QuestionShow'
import QuizSelection from './QuizSelection'
import UsersContainer from './containers/UsersContainer'
import Home from './Home'
import LoginForm from './LoginForm'
import isAuthenticated from './hocs/isAuthenticated'

const AuthedUsersContainer = isAuthenticated(UsersContainer)

class Main extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bindd(this)

    this.state = {
      questions: [],
      currentQuestion: null,
      answers: [],
      currentAnswer: null
    }
  }
  handleLogin(params){
    logIn(params)
    .then(res => {
      if(res.error) {
        return
      }
      localStorage.setItem('jwt', res.token)
      this.props.history.push('/users')
    })
  }

  componentDidMount() {
    console.log("Hi I'm in Main");
    fetchQuestions()
    .then( questions => this.setState({
      questions: questions,
      currentQuestion: questions[0]
    }))
    fetchAnswers()
    .then( answers => this.setState({
      answers: answers,
      currentAnswer: answers[0]
    }))
  }

  handleNextQuestion(){
    const indexOfQuestion = this.state.questions.findIndex((question) => question === this.state.currentQuestion)
    const indexOfAnswer = this.state.answers.findIndex((answer) => answer === this.state.currentAnswer)
    //check answer, if answer === matches, set state, else do nothing

    this.setState({
      currentQuestion: this.state.questions[indexOfQuestion + 1],
      currentAnswer: this.state.answers[indexOfAnswer + 1]
    })
  }


  render() {
    return(
      <div>
        <Switch>
          <Route path='/out' component={Home} />
          <Route path='/login' render={() => <LoginForm handleLogin={this.handleLogin}/>}/>
          <Route path='/profile' component={ProfileCard}  />
          <Route path='/users' component={AuthedUsersContainer}/>
          <Route exact path='/quizzes/ruby/questions/1' render={() =>  <Question currentQuestion={this.state.currentQuestion} currentAns={this.state.currentAnswer} answers={this.state.answers} onClick={this.handleNextQuestion.bind(this)} />} />
          <Route path='/quizzes/ruby/questions/:id' render={({match}) => {
            const question = this.state.questions.find(question => question.id === parseInt(match.params.id))
              return <QuestionShow questions={question}/> }}/>
          <Route path='/quizzes' render={() =>  <QuizSelection questions={this.state.questions}/>}/>
          <Route path='/signup' component={UsersContainer} />
        </Switch>
      </div>
    )
  }
}
export default withRouter(Main)


{/* <Route path='/quizzes' render={({match}) => {
  const quiz = this.state.questions.find(question => question.id === parseInt(match.params.id))
  return <QuizSelection question={quiz} /> }}
 /> */}
 {/* <Route path='/answers' component={AnswersContainer} /> */}
 {/* <Route path='/quizzes' component={QuizContainer} />
 <Route path='/help' component={Help} />  */}
 {/* <Route exact path='/help' render={() => <h1>To start a quiz press the start button</h1>} /> */}
 // import NextQuestion from './NextQuestion'
 // import QuestionsContainer from './containers/QuestionsContainer'
 // import AnswersContainer from './containers/AnswersContainer'
 // import QuizContainer from './containers/QuizContainer'
 // import Help from './Help'

 // handleAddUserAnswer(input){
 //   createUserAnswer(input)
 //     .then( user_answer => this.setState( prevState =>  ({ user_answers: [...prevState.user_answers, user_answer] }) ))
 //     .catch(e => console.log(e))
 // }
