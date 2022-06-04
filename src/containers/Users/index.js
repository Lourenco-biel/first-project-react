import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'


import axios from 'axios'
import Avatar from '../../Assets/avatar.svg'
import Arrow from '../../Assets/arrow.svg'
import Trash from '../../Assets/trash.png'

import { 
  Container, 
  H1, 
  Image, 
  ContainerItens,  
  User, 
  Button 
} from './style';

const Users = () => {
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate()

      useEffect(()=> {
        async function fetchUsers(){
          const {data: newUsers} = await axios.get("http://localhost:3001/users")
          setUsers(newUsers)
        }

        fetchUsers()
      },[])


 async function deleteUser(userId){
  await axios.delete(`http://localhost:3001/users/${userId}`)  
  const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage (){
    Navigate('/')
  }

  return (
    <Container>
      <Image src={Avatar} alt='People' />
      <ContainerItens>

        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name} </p><p> {user.age}</p>
              <button onClick={()=> deleteUser(user.id)}>
                <img src={Trash} alt='Lata de lixo' />
                </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage} ><img alt='seta' src={Arrow} /> Voltar </Button>

      </ContainerItens>
    </Container>
  );

}

export default Users;
