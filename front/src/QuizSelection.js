import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'
import Quiz from './Quiz'
import { fetchQuizzes } from './api'

export default class QuizSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quizzes: []
    }
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
      <div>

      <Grid columns={8}>
          <Grid.Column></Grid.Column>

          <Grid.Column width={6}>
            <p>Select a Quiz</p>
            </Grid.Column>
      <Grid.Column></Grid.Column>
          {quizzes.map(({ id, name }, key) => (
            <Grid.Row key={key} container centered>
              <Grid.Column width={12}>
                <Link to={`/quizzes/${id}`}>
                  <Button inverted color='teal' size='massive'>
                    {name}
                  </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          ))}

          <Grid.Column width={8} >
            <h4 className="line-1 anim-typewriter3">Isn't this a beautiful day?</h4>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
