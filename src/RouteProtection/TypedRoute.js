import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

function TypedRoute(props) {
    return props.type.includes(props.typeFromRedux) ? <Route {...props} >{props.children}</Route> : <Redirect to="/dashboard" />
}

export default connect(state=>({typeFromRedux:state.auth.type}))(TypedRoute)