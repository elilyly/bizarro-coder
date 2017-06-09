import React from 'react'
import { Link } from 'react-router-dom'


export default function Question(props) {
  const questionsList = props.questions.map((question, i) =>
    <div key={question.id}>
      <p>{question.content}</p><br/>
    </div>)


    return (
      <div className='col-md-4'>
        <div>
        <ul>
          {questionsList}
        </ul>
        </div>
      </div>
    )
}
