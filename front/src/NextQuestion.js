import React, { Component } from 'react'
import { Button, Progress, Form, TextArea, Header, Modal  } from 'semantic-ui-react'
import { fetchQuestions, createUserAnswers }  from './api/index'
// import Question from './Question'
// import QuestionShow from './QuestionShow'
//fetch questions again
//.find, the next question
//POST or GET, POST to handle checking

export default class NextQuestion extends Component {
  constructor(props) {
    super(props)
    console.log("WHY", props.question)

    this.state = {
      percent: 0,
      questions: [],
      input: '',
      step: 0
    }
  }

  handleInputChange(e){
    console.log(e.target.value);
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    input: this.state.input
    this.setState({
      input: ''
    })
    // redirect to question:id 2
  }

  componentDidMount() {
    console.log("hi");
    fetchQuestions()
    .then( questions => this.setState({
      questions: questions
    }))
  }

  // handleAddUserAnswer(input){
  //   createUserAnswer(input)
  //     .then( user_answer => this.setState( prevState =>  ({ user_answers: [...prevState.user_answers, user_answer] }) ))
  //     .catch(e => console.log(e))
  // }


  nextStep = () => this.setState({
    step: (this.state.step + 1)
  })

// App -> quizSlection->ruby/JS> quesiont1> 2

  increment = () => this.setState({
    percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    })

  render() {
    return (
      <div centered>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <TextArea placeholder="Enter Answer..." autoHeight value={this.state.input} onChange={this.handleInputChange.bind(this)} />
            <Progress percent={this.state.percent} />
          </Form>
            <div centered>
          <Modal trigger={<Button type="submit" onClick={this.increment}>Next</Button>} basic size='small'>
          <Modal.Content>
            <img src={'https://media.giphy.com/media/GiIaqnaKSvOaA/giphy.gif'} className="img-responsive"/>
          </Modal.Content>
        </Modal>
      </div>
      </div>
    )
  }
}

{/* <Button type="submit" onClick={this.increment}>Next</Button> */}
