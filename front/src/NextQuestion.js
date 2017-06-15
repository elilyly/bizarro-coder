import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Progress, Form, TextArea, Header, Modal  } from 'semantic-ui-react'
import { fetchQuestions, fetchAnswers, createUserAnswers }  from './api/index'

export default class NextQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percent: 0,
      questions: [],
      input: '',
      // correctAnswer: null
      // step: 0
    }
  }
  // this.handleNextQuestion = this.handleNextQuestion.bind(this)

  handleInputChange(e){
    console.log('Hi, I`m in NextQuestion', e.target.value);
    this.setState({
      input: e.target.value
    })
  }
  increment() {
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.state.input !== this.props.currentAnswer ? this.props.onClick() : console.log('wrong answer')
    this.setState({
      input: ''
    })
  }


  render() {
    // const { correctAnswer } = this.state;
    return (
      <div centered>
        <Link to='/quizzes/ruby/questions/:id'></Link>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <TextArea placeholder="Enter Answer..." autoHeight value={this.state.input} onChange={this.handleInputChange.bind(this)} />
          <Button type="submit" basic size='small' onClick={this.increment.bind(this)}>Next</Button>
          <Progress percent={this.state.percent} />
        </Form><br/><br/>

        {/* <Modal trigger=> */}
        {/* <Modal.Content>
          <img src={'https://media.giphy.com/media/GiIaqnaKSvOaA/giphy.gif'} className="img-responsive"/>
        </Modal.Content>
      </Modal> */}
      </div>
    )
  }
}

{/* <Button type="submit" onClick={this.increment}>Next</Button> */}

//
// checkAnswer() {
//   this.state.input === "no";
// }

// handleAddUserAnswer(input){
//   createUserAnswer(input)
//     .then( user_answer => this.setState( prevState =>  ({ user_answers: [...prevState.user_answers, user_answer] }) ))
//     .catch(e => console.log(e))
// }
//
// handleNextQuestion(){
//   var i
//   var array = this.state.questions
//   for(i = 0; i < array.length; i++) {
//     var nextQ = array.push(array[i])
//   }
//   return nextQ
// }

// nextStep = () => this.setState({
//   step: (this.state.step + 1)
// })

// App -> quizSlection->ruby/JS> quesiont1> 2

// import Question from './Question'
// import QuestionShow from './QuestionShow'
//fetch questions again

    // checkAnswer() {
    //   if(input === correct_answer){
    //     nextStep()
    //   } else{
    //     <Modal trigger={<Button type="submit" onClick={this.increment}>Next</Button>} basic size='small'>
    //     <Modal.Content>
    //       <img src={'https://media.giphy.com/media/GiIaqnaKSvOaA/giphy.gif'} className="img-responsive"/>
    //     </Modal.Content>
    //   </Modal>
    //   }
    // }
