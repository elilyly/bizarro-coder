import React from 'react'
import { Link } from 'react-router-dom'


export default function Answer(props) {
  const answersList = props.answers.map((answer, i) =>
    <div key={answer.id}>
      <p>{answer.answers}</p><br/>
    </div>)


    return (
      <div className='col-md-4'>
        <div>
        <ul>
          {answersList}
        </ul>
        </div>
      </div>
    )
}
