export const fetchQuizzes = () => {
  return (
    fetch('http://localhost:3000/api/v1/quizzes')
      .then(res => res.json())
  )
}

export const fetchQuestions = (quizId) => {
  console.log('fetchQuestions', quizId)
  return fetch(`http://localhost:3000/api/v1/quizzes/${quizId}/questions`)
    .then(response => response.json())
}

export function fetchAnswers(){
  return fetch('http://localhost:3000/api/v1/answers')
  .then(response => response.json())
}

export function fetchCurrentUser() {
  return fetch('http://localhost:3000/api/v1/users/me', {
    headers: {
      'Authorization': localStorage.getItem('jwt')
    }
  }).then(res => res.json())
}

export function fetchUsers(){
  // TODO: this should make a request to auth controller, index application
  // which has the appropriate logic for decoding a jwt token
  return fetch("http://localhost:3000/api/v1/users", {
    headers: {
      'Authorization': localStorage.getItem('jwt')
    }
  })
    .then( res => res.json() )
}

  export function createUserAnswers(input, correct_answer){
    return fetch("http://localhost:3000/api/v1/user_answers", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify( {user_answer: {input: input}} )
    })
  }

export function fetchUserAnswers() {
  return fetch("http://localhost:3000/api/v1/user_answers")
    .then( res => res.json() )
}

export function createUser(username, firstName, lastName, password){
  return fetch("http://localhost:3000/api/v1/users", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('jwt')
    },
    method: 'POST',
    body: JSON.stringify({
      user: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password
      }
    })
  })
  .then(res => res.json())
  .then(res => {
    if (res.errors) {
      alert(res.errors.join(' '))
    } else {
      localStorage.setItem('jwt', res.token)
    }
    return res
  })
}

export function logIn(params){
  return fetch("http://localhost:3000/api/v1/login", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  })
  .then(res => res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      localStorage.setItem('jwt', res.token)
    }
    return res
  })
}
