import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import QuestionShow from './QuestionShow'

export default function Question(props) {
  const questionsList = props.questions.map((question, i) =>
    <div key={question.id}>
      <Link to={`/questions/${question.id}`}>{question.content}</Link><br/>
    </div>)

    return (
      <div className="ui page grid main fluid">
         <div className="row">
           <div className="column padding-reset">
             <Grid centered>
               <Grid.Row container centered><br/>
                <h1>Questions</h1>
                <ul>
                  {questionsList}
                </ul>
              </Grid.Row>
            </Grid>
        </div>
      </div>
    </div>
    )
}
