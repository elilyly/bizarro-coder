import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Form, TextArea } from 'semantic-ui-react'
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

    return questions[questionIndex];
  }

  render(){
    const currentQuestion = this.currentQuestion()
    const { questions, questionIndex } = this.state;

    return(
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/><br/>
                {/* <h1>Questions</h1> */}
                <br/>
                <br/>
                <br/>
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
              </Grid.Row>
              <Grid.Row container centered><br/><br/>
              </Grid.Row>
            </Grid><br/><br/><br/><br/>
          </div>
        </div>
      </div>
    )
  }
}
