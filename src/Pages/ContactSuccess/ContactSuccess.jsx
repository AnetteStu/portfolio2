import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function ContactSuccess() {
  const navigate = useNavigate();
  const content = useLocation()
  console.log(content);

  // useEffect(() => {
  //   if(content.state === null) {
  //     navigate("/")
  //     return
  //   }
  // }, [])

  const result = content.state.result
  return (
    <div>
      <h1>
        {result.message}
      </h1>
      <p>You will hear back from me shortly {result.data.name}!</p>
      <sub>Please give me a few days to answer. I have a full time job and a busy private life, but I check my email every day.</sub>
      <button>
        <Link to="/">Go back to home</Link>
      </button>
    </div>
  )
}
