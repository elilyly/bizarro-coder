export function fetchQuestions(){
  return fetch('http://localhost:3000/api/v1/questions')
  .then(response => response.json())
}

export function fetchAnswers(){
  return fetch('http://localhost:3000/api/v1/answers')
  .then(response => response.json())
}

export function fetchUsers(){
  return fetch("http://localhost:3000/api/v1/users")
    .then( res => res.json() )
}

// export function createUserAnswers(input){
//   return fetch("http://localhost:3000/api/v1/user_answers"), {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify( {user_answer: {input: input}} )
//   })
// }

export function createUser(username){
  return fetch("http://localhost:3000/api/v1/users", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify( {user: {username: username}} )
  })
}
