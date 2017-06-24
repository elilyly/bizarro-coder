  import React from 'react'
  import { Link, Switch, Route } from 'react-router-dom'
  import { Grid, Button } from 'semantic-ui-react'
  import NextQuestion from './NextQuestion'
  import QuestionShow from './QuestionShow'
  import Answer from './Answer'


  export default function Question(props) {
    if(!props.currentQuestion){
      return <div>Loading</div>
    }
  //filter answer_id & questionid

  return (

    <div>
          <Grid centered>
            <Grid.Row container centered><br/>
              <Grid.Row container centered><br/><br/><br/>
              <h1> Start your Quiz! </h1>
              <div >
                <QuestionShow key={props.currentQuestion.id} id={props.currentQuestion.id} question={props.currentQuestion.content} answers={props.answers} currentAns={props.currentAns} onClick={props.onClick}/>
              </div>
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
    //   </div>
    // </div>
  )
}
