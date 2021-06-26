import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

function ProtectedPath(props) {
    return props.isLogged ? <Route {...props} >{props.children}</Route> : <Redirect to="/login" />
}

export default connect(state=>({isLogged:state.auth.isLogged}))(ProtectedPath)
