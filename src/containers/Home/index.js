import React, { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import People from '../../Assets/people.svg'
import Arrow from '../../Assets/arrow.svg'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { 
  Container, 
  Image, 
  InputLabel,  
  Input 
} from './style';

const App = () => {
  const [users, setUsers] = useState([]);
  const InputName = useRef()
  const InputAge = useRef()
  const Navigate = useNavigate()


  async function addNewUser() {
     const {data: newUser} = await axios.post("http://localhost:3001/users",{
      name:InputName.current.value,
      age: InputAge.current.value,
    });
    

    setUsers([...users, newUser]) 

    Navigate("/usuarios")
  }



  return (
    <Container>
      <Image src={People} alt='People' />
      <ContainerItens>

        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={InputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder='Idade' />

        <Button  onClick={addNewUser}>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );

}

export default App;
