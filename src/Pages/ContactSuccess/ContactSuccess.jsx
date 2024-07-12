import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ContactSuccess() {
  // const navigate = useNavigate();
  const state = useLocation()
  console.log(state);
  const result = state
  console.log(result.state.result);
  // if(result.success != true) {
  //   navigate("/")
  // }
  return (
    <div>
      <h1>
        {result.state.result.message}
      </h1>
      <p>You will hear back from me shortly {result.state.result.data.name}.</p>
    </div>
  )
}
