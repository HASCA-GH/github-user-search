import { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container'
import Searcher from './containers/Searcher/Searcher';
// import Box from '@mui/material/Box'

import getGitHubUser from './services/users';

function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser);
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user)
    // Saving to our local storage
    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse)
    }

    if (userResponse.message ==='Not Found') {
      const {octocat} = localStorage;
      setInputUser(octocat)
      setNotFound(true)
    } else {
      setUserState(userResponse)
    }
    console.log('My userXXXX', userResponse)

    console.log('userState interno >>>> ', userState)
  }
  console.log('userState >>>> ', userState)
  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser])
  
  return (

    <div className="App">
      Inicia aquí
      <Container 
          maxWidth="sm"
          sx={{ bgcolor: 'whitesmoke', 
          width: '80vh',
          height: '100vh',
          borderRadius: '16px', 
          marginTop: '40px',
          display: 'flex',
          flexDirection:'column',
          alignItems: 'center'
           }}>
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      </Container>
     
    </div>
  );
}

export default App;
