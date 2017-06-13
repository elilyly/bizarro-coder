import React, { Component } from 'react'
import { Grid, Form, TextArea } from 'semantic-ui-react'
import Question from './Question'
// import Main from './Main'
import NextQuestion from './NextQuestion'

function QuestionShow(props) {
  console.log("HERE ARE THE QUESTION SHOW PROPS:", props);
  return(
    <div className="ui page grid main fluid">
      <div className="row">
        <div className="column padding-reset">
          <Grid centered>
            <Grid.Row container centered><br/><br/>
              <h1>Question</h1><br/><br/><br/>
              {/* <h2>{props.question.content}</h2> */}
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
export default QuestionShow