import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Form, TextArea } from 'semantic-ui-react'
import QuizSelection from './QuizSelection'
import QuestionShow from './QuestionShow'
import NextQuestion from './NextQuestion'

function Quiz(props) {
  // const quizList = props.questions.map((question, i) =>
  //   <div key={question.id}>
  //      <Link to={`/quizzes/${question.id}`}>{question.content}</Link>
  //   </div>
  // )
  return(
    <div className="ui page grid main fluid">
      <div className="row">
        <div className="column padding-reset">
          <Grid centered>
            <Grid.Row container centered><br/><br/>
              <h1>Question</h1><br/><br/><br/>
              {/* <QuestionShow /> */}
            </Grid.Row>
            <Grid.Row container centered><br/><br/>
            <NextQuestion />
            </Grid.Row>
          </Grid><br/><br/><br/><br/>
        </div>
      </div>
    </div>
  )
}
export default Quiz
