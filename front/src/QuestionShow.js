import React, { Component } from 'react'
import { Grid, Form, Card, Button, TextArea, Progress } from 'semantic-ui-react'
// import Question from './Question'
// import Main from './Main'
import NextQuestion from './NextQuestion'

export default class QuestionShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
//correctAnswer
  handleInputChange(e){
    console.log('Hi, I`m in NextQuestion', e.target.value);
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.question.answers.includes(this.state.input)
      ? this.props.increment()
      : alert('wrong answer')

    this.setState({
      input: ''
    })
  }


  render() {
    const { question, questionIndex } = this.props
    const { id, content } = question;

    return (
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/><br/>
              <Card.Group><br/><br/><br/><br/>
              <Card>
                <Card.Content>
                  <Card.Header>Question {questionIndex + 1}</Card.Header>
                  <Card.Description><p dangerouslySetInnerHTML={{__html: content}} /></Card.Description>
                  <Grid.Row container centered>
                    <br/>
                    <br/>
                    <Card.Description>
                      {/* <Form onSubmit={this.handleSubmit.bind(this)}> */}
                        <TextArea
                          placeholder="Enter Answer..."
                          autoHeight value={this.state.input}
                          onChange={this.handleInputChange.bind(this)}
                        />
                        <Button
                          type="submit"
                          basic
                          size='small'
                          onClick={this.handleSubmit.bind(this)}
                        >
                          Next
                        </Button>
                        <Progress percent={this.props.percentComplete} />
                      {/* </Form><br/><br/> */}
                    </Card.Description>
                </Grid.Row>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  </div>
</div>
)
  }
}
