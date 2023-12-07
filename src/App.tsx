import { ChangeEvent, useState } from 'react'
import PrimaryInput from './components/Input/PrimaryInput'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className="container">
      <PrimaryInput
        value={email}
        onChange={handleChange}
        name="email"
        label="Digite seu e-mail"
      />
    </div>
  )
}

export default App
