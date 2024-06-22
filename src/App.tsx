import axios from 'axios'
import Routes from './Routes';
import {UserContextProvider } from './utils/context/UserContext';


function App() {
  axios.defaults.baseURL = 'http://localhost:4000/';
  axios.defaults.withCredentials = true;
  return (
    <>
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
    </>
  )
}

export default App
