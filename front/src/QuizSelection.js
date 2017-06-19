import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import Quiz from './Quiz'
import { fetchQuizzes } from './api'

export default class QuizSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
  }

  componentDidMount() {
    fetchQuizzes()
      .then((quizzes, error) => {
        if (!error && quizzes) {
          this.setState({ quizzes })
        }
      })
  }

  render() {
    const { quizzes } = this.state

    return (
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/>
                <h1>Select a Quiz</h1>
              </Grid.Row>


              {quizzes.map(({ id, name }, key) => (
                <Grid.Row key={key} container centered>
                  <br />
                  <Link to={`/quizzes/${id}`}>
                    <Button basic  color='red' size='massive'>
                      {name}
                    </Button>
                  </Link>
                </Grid.Row>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    )
  }
}


{/* <Route path='/quizzes/ruby/questions/:id' render={({match}) => {
  const quiz = this.state.questions.find(question => question.id === parseInt(match.params.id))
  return <QuizSelection question={quiz} /> }}
 /> */}
