import React, { Component } from 'react'
import { Grid, Form, TextArea, Card } from 'semantic-ui-react'
// import Question from './Question'
// import Main from './Main'
import NextQuestion from './NextQuestion'

function QuestionShow( props ) {//use props
  // console.log("HERE ARE THE QUESTION SHOW PROPS:", question);

  return(
    <div className="ui page grid main fluid">
      <div className="row">
        <div className="column padding-reset">
          <Grid centered>
            <Grid.Row container centered><br/><br/>
              <Card.Group><br/><br/><br/><br/>
                <Card>
                  <Card.Content>
                    <Card.Header>Question {props.id}</Card.Header>
                    <Card.Description>{props.question}</Card.Description>
                    <Grid.Row container centered><br/><br/>
                    <Card.Description><NextQuestion question={props.question} onClick={props.onClick} currentAns={props.currentAns} answers={props.answers}/></Card.Description>
                    </Grid.Row>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Row>
          </Grid>
         </div>
       </div>
     </div>
  )
}
export default QuestionShow
