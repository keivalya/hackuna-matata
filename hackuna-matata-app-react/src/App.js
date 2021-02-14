import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [AlertMessage, setAlertMessage] = useState('Loading')
  const [FrontDistance, setFrontDistance] = useState(0)
  const [BackDistance, setBackDistance] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      axios.get('http://localhost:9000/data').then((response) => {
        setFrontDistance(response.FrontDistance)
        setBackDistance(response.BackDistance)
        if (FrontDistance === 55 && BackDistance === 55) {
          setAlertMessage('GOOD')
        } else if (response.notLoaded) {
          setAlertMessage('Loading')
        } else {
          setAlertMessage('NOT GOOD')
        }
      })
    }, 2000)
  }, [FrontDistance, BackDistance])

  const Message = () => {
    return (
      <div>
        Front Distance - {FrontDistance}
        <br />
        <br />
        Back Distance -{BackDistance}
      </div>
    )
  }
  return (
    <div>
      <Message />
      <h1>{AlertMessage}</h1>
    </div>
  )
}

export default App
