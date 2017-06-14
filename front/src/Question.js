  import React from 'react'
  import { Link, Switch, Route } from 'react-router-dom'
  import { Grid, Button } from 'semantic-ui-react'
  import NextQuestion from './NextQuestion'
  import QuestionShow from './QuestionShow'
  import Answer from './Answer'


  export default function Question(props) {
    console.log("THIS", props.questions[0]);
    const questionsList = props.questions.map((question, i) => {
      return <QuestionShow key={question.id} question={question.content}/>
  })


  //filter answer_id & questionid

  return (
    <div className="ui page grid main fluid">
      <div className="row">
        <div className="column padding-reset">
          <Grid centered>
            <Grid.Row container centered><br/>
              <Grid.Row container centered><br/><br/><br/>
                <h1> Start your Quiz! </h1>
                {questionsList[0]}
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}
