import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Question from './Question'

function QuestionShow(props) {
  console.log(props.question.content);
    return(
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/><br/>
              <h1>Question</h1><br/><br/><br/>
              <h2>{props.question.content}</h2>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    )

}
export default QuestionShow
