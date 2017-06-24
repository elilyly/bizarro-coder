import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Form, TextArea, Header } from 'semantic-ui-react'
import QuizSelection from './QuizSelection'
import QuestionShow from './QuestionShow'
import NextQuestion from './NextQuestion'
import { fetchQuestions } from './api'

export default class Quiz extends Component {
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      questionIndex: null
    }
    this.currentQuestion = this.currentQuestion.bind(this)
  }

  componentDidMount(){
    fetchQuestions(parseInt(this.props.match.params.id))
      .then(({questions, error}) => {
        if(!error && questions) {
          this.setState({
            questions,
            questionIndex: 0
          })
        }
      })
  }

  currentQuestion() {
    const { questions, questionIndex } = this.state;

    return questions[questionIndex]
  }

  render(){
    const currentQuestion = this.currentQuestion()
    const { questions, questionIndex } = this.state;

    return(
        <div>
            <Grid columns={12}>
                <Grid.Column></Grid.Column>
                <Grid.Column width={6}>
                  <Grid.Row><br/><br/>
                {currentQuestion && (
                  <QuestionShow
                    question={currentQuestion}
                    questionIndex={questionIndex}
                    percentComplete={questionIndex / questions.length * 100}
                    increment={() => {
                      this.setState({
                        questionIndex: this.state.questionIndex + 1
                      })
                    }}
                  />
                )}
              {/* </Grid.Row> */}
              <Grid.Row><br/><br/>
              <Grid.Column width={3} >
                <h4 className="line-1 anim-typewriter">Are you sure?</h4>
              </Grid.Column>
              </Grid.Row>
            </Grid.Row>
          </Grid.Column>
            </Grid><br/><br/><br/><br/>

          </div>


    )
  }
}
