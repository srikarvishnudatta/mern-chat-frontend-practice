import { useContext } from 'react'
import { UserContext } from './utils/context/UserContext'
import RegisterAndLoginForm from './components/RegisterAndLoginForm'
import Home from './components/Chat'
const Routes = () => {
  const {username} = useContext(UserContext)
  if(username) return <Home />
  return (
    <RegisterAndLoginForm />
  )
}

export default Routes