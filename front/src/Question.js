  import React from 'react'
  import { Link, Switch, Route } from 'react-router-dom'
  import { Grid, Button } from 'semantic-ui-react'
  // import Main from './Main'
  import QuestionShow from './QuestionShow'

  export default function Question(props) {
    console.log(props);
    const questionsList = props.questions.map((question, i) =>
    <div key={question.id}>
      <Link to={`/quizzes/ruby/questions/${question.id}`}>{question.content}</Link>
    </div>
  )
  return (
    <div className="ui page grid main fluid">
      <div className="row">
        <div className="column padding-reset">
          <Grid centered>
            <Grid.Row container centered><br/>
              <h1>Questions</h1><br/><br/><br/><br/><br/>
              <Grid.Row container centered><br/><br/><br/>
                <h1> Start your Quiz! </h1>
                {/* {questionsList} */}
                <Link to={`/quizzes/ruby/questions/${props.questions[0].id}`}><Button basic  color='red' size='massive'>START</Button></Link>
              </Grid.Row>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    </div>
  )
}
