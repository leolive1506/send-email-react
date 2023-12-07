import { ChangeEvent, useState } from 'react'
import PrimaryInput from './components/Input/PrimaryInput'
import './App.css'
import { Button, Spacer } from '@chakra-ui/react'
import { useIdentifyMutation } from './hooks/useIdentifyMutation'

function App() {
  const { mutate } = useIdentifyMutation();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)
  const handleChangelastName = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName
    })
  }

  return (
    <div className="container">
      <form action="">
        <div className="name-form-container">
          <PrimaryInput
            value={firstName}
            onChange={handleChangeName}
            name="name"
            label="Primeiro nome"
            placeholder='Fernanda'
          />
          <PrimaryInput
            value={lastName}
            onChange={handleChangelastName}
            name="lastName"
            label="Sobrenome"
            placeholder='Kipper'
          />
        </div>
        <Spacer height={4} />
        <PrimaryInput
          value={email}
          onChange={handleChangeEmail}
          name="email"
          label="Digite seu e-mail"
          placeholder='example@gmail.com'
        />
        <Spacer height={4} />
        <Button colorScheme='green' width="100%" mt={4} onClick={submit}>Enviar</Button>
      </form>
      <Spacer width={4} maxWidth={4} />
      <div className="product-details">
        <h2>Assinatura mensal</h2>
        <Spacer width={4} />
        <p>Você irá pagar</p>
        <span>R$ 250,00</span>
        <Spacer width={4} />
        <p>Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit. Error amet assumenda voluptatum nulla qui harum, facere non at dolorum. Tempore.</p>
      </div>
    </div>
  )
}

export default App
