import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Question from './Question'

class QuestionShow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.questions.id,
      question: props.questions.content
    }
  }

  render() {
    return(
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/>
              <h1>Question</h1>
              {this.state.question}
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    )

  }




}
