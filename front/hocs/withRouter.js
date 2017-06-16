import React from 'react'
import { Route } from 'react-router-dom'

export default function withRouter(WrappedComponent){
  return (props) => {

    return  <Route render={ routerProps => <WrappedComponent {...props} {...routerProps} />} />
  }
}
