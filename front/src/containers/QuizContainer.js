// import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Quiz from '../Quiz'
// import axios from 'axios'
//
// class QuestionsContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       questions: []
//     }
//   }
//   componentDidMount() {
//     const URL = 'http://localhost:3000/api/v1/questions'
//     axios.get(URL)
//     .then(res => { this.setState({ questions: res.data })
//     this.props.history.push('/quizzes')
//   })
//   }
//
//   render() {
//     return (
//       <div>
//         <Switch>
//           <Route
//             path='/quizzes'
//             render={() => <Quiz questions={this.state.questions}/>}
//           />
//         </Switch>
//       </div>
//     )
//   }
// }
//
// export default QuestionsContainer
