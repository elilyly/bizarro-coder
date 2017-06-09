import React from 'react'
// import ProfileCard from './ProfileCard';
// import Questions from './Questions'
// import QuestionsContainer from './containers/QuestionsContainer'
import {  Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'
import QuestionsContainer from './containers/QuestionsContainer'
import AnswersContainer from './containers/AnswersContainer'
import './App.css'

export default () => {
    return (
      <div className="container-fluid">
        <NavBar />
          <Switch>
                <Route path='/quizzes' component={QuestionsContainer} />
                <Route path='/help' component={AnswersContainer} />
                {/* <Route exact path='/help' render={() => <h1>To start a quiz press the start button</h1>} /> */}
          </Switch>
      </div>
    )
  }
