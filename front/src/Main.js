import React, { Component } from 'react'
import {
  createUserAnswers,
  logIn,
  fetchCurrentUser
}  from './api/index'
import { Switch, Route, withRouter } from 'react-router-dom'

import ProfileCard from './ProfileCard'
import Question from './Question'
import QuestionShow from './QuestionShow'
import Quiz from './Quiz'
import QuizSelection from './QuizSelection'
import UsersContainer from './containers/UsersContainer'
import Home from './Home'
import Logout from './Logout'
import LoginForm from './LoginForm'
import isAuthenticated from './hocs/isAuthenticated'
import NavBar from './NavBar'

const AuthedUsersContainer = isAuthenticated(UsersContainer)
const AuthenticatedQuizSelection = isAuthenticated(QuizSelection)
const AuthenticatedProfileCard = isAuthenticated(ProfileCard)

class Main extends Component {
  constructor(props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)

    this.state = {
      // questions: [],
      // // currentQuestion: null,
      // answers: [],
      // currentAnswer: null,
      currentUser: null
    }
  }

  componentDidMount() {
    // console.log("Hi I'm in Main");
    fetchCurrentUser()
      .then(({ user, error }) => {
        if (!error) {
          this.setCurrentUser(user)
        }
      })
  //   fetchQuestions()
  //   .then( questions => this.setState({
  //     questions: questions,
  //     currentQuestion: questions[0]
  //   }))
  //   fetchAnswers()
  //   .then( answers => this.setState({
  //     answers: answers,
  //     currentAnswer: answers[0]
  //   }))
    }

  setCurrentUser(currentUser, callback) {
    this.setState({ currentUser }, callback)
  }

  handleLogin(params){
    logIn(params)
      .then(res => {
        if (!res.errors) {
          this.setCurrentUser(
            res.user,
            () => this.props.history.push('/profile')
          )
        }
      })
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
    const { currentUser } = this.state
    return(
      <div className="container-fluid">
        <NavBar currentUser={currentUser} />
        <br />
        <br />
        <br />
        <Switch>
          <Route
            path='/logout'
            render={props =>
              <Logout
                {...props}
                setCurrentUser={this.setCurrentUser}
              />
            }
          />
          <Route
            path='/login'
            render={props => {
              return (
                <LoginForm
                  {...props}
                  handleLogin={this.handleLogin}
                />
              )
            }}
          />
          <Route
            path='/signup'
            render={props => {
              return (
                <UsersContainer
                  {...props}
                  setCurrentUser={this.setCurrentUser}
                />
              )
            }}
          />
          <Route
            path='/profile'
            render={props =>
              <AuthenticatedProfileCard
                {...props}
                currentUser={currentUser}
              />
            }
          />

          <Route exact path='/quizzes/ruby/questions/1' render={() =>  <Question currentQuestion={this.state.currentQuestion} currentAns={this.state.currentAnswer} answers={this.state.answers} onClick={this.handleNextQuestion.bind(this)} />} />
          <Route path='/quizzes/ruby/questions/:id' render={({match}) => {
            const question = this.state.questions.find(question => question.id === parseInt(match.params.id))
              return <QuestionShow questions={question}/> }}/>

          <Route
            path='/quizzes/:id'
            component={Quiz}
          />
          <Route
            path='/quizzes'
            render={props =>
              <AuthenticatedQuizSelection
                {...props}
                questions={this.state.questions}
              />
            }
          />
          <Route path='/' component={Home} />
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
