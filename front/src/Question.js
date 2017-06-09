import React from 'react'
// import QuestionShow from './QuestionShow'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

export default function Question(props) {
  const questionsList = props.questions.map((question, i) =>
    <div key={question.id}>
      <Link to={`/questions/${question.id}`}>{question.id}</Link><br/>
    </div>)

    return (
      <div className="ui page grid main fluid">
         <div className="row">
           <div className="column padding-reset">
             <Grid centered>
               <Grid.Row container centered><br/>
                <h1>Questions</h1>
                {/* <Switch>
                  <Route path='/questions/:id' render={({match}) => {
                    const question = props.questions.find(question => question.id === parseInt(match.params.id))
                    return <h3>{questionsList}</h3> }}
                  />
                </Switch> */}
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
