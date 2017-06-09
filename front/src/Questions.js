import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'



class Questions extends Component {
  constructor() {
    super()

    this.state = {
      questions: []
    }
  }


  getData() {
    fetch('http://localhost:3000/api/v1/questions')
    .then(response => response.json())
    .then( data =>
      this.setState({
        questions: data
      })
    )
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    return(
      <Container text>
        <Header as='h2'>Header</Header>
        <p>{this.state.questions} Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>

      </Container>
    )
  }

}

export default Questions
