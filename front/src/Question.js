  import React from 'react'
  import { Link, Switch, Route } from 'react-router-dom'
  import { Grid, Button } from 'semantic-ui-react'
  import NextQuestion from './NextQuestion'
  import QuestionShow from './QuestionShow'
  import Answer from './Answer'


  export default function Question(props) {
    console.log("THIS", props.questions[0]);
    const questionsList = props.questions.map((question, i) => {
      return <div>
        <QuestionShow key={question.id} id={question.id} question={question.content}/>
      </div>
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
                {questionsList}
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}
