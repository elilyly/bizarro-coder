import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
// import Quiz from './Quiz'

export default function QuizSelection(props) {
  return (
    <div className="ui page grid main fluid">
       <div className="row">
         <div className="column padding-reset">
           <Grid centered>
             <Grid.Row container centered><br/>
              <h1>Quiz</h1>
             </Grid.Row>

             <Grid.Row container centered><br/>
              <Link to='/quizzes/ruby/questions'><Button basic  color='red' size='massive'>Ruby</Button></Link>
             </Grid.Row>
             <Grid.Row><br/>
              <Link to='/quizzes/javascript/questions'><Button basic  color='yellow' size='massive'>JavaScript</Button></Link>
            </Grid.Row>
          </Grid>
      </div>
    </div>
  </div>
  )
}


{/* <Route path='/quizzes/ruby/questions/:id' render={({match}) => {
  const quiz = this.state.questions.find(question => question.id === parseInt(match.params.id))
  return <QuizSelection question={quiz} /> }}
 /> */}
