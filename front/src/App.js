import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import ProfileCard from './ProfileCard';
import NavBar from './NavBar'
import QuestionsContainer from './containers/QuestionsContainer'
import AnswersContainer from './containers/AnswersContainer'
import UsersContainer from './containers/UsersContainer'
import './App.css'

export default () => {
    return (
      <div className="container-fluid">
        <NavBar />
          <Switch>
                <Route path='/questions/' component={QuestionsContainer} />
                <Route path='/answers' component={AnswersContainer} />
                <Route path='/profile' component={ProfileCard} />
                <Route path='/login' component={UsersContainer} />
                <Route path='/quizzes' component={AnswersContainer} />
                {/* <Route exact path='/help' render={() => <h1>To start a quiz press the start button</h1>} /> */}
          </Switch>
      </div>
    )
  }
