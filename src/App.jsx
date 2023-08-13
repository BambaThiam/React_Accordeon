import React, { useState } from 'react'
import Questions from './Questions'
import data from './data'

const App = () => {
  const [questions, setQuestions] = useState(data)
  return <Questions questions={questions} />
}
export default App
