import { GlobalStyle } from './styles/global'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewUserModal from './components/Modals/NewUserModal'
import DeleteUserModal from './components/Modals/DeleteUserModal'
import EditUserModal from './components/Modals/EditUserModal'
import NewBankAccountModal from './components/Modals/NewBankAccountModal'
import EditBankAccountModal from './components/Modals/EditBankAccountModal'
import DeleteBankAccountModal from './components/Modals/DeleteBankAccountModal'
import Users from './pages/Users'

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Home />} />
          <Route path='users'>
            <Route path=':id' element={<Users />} />
          </Route>
        </Routes>
      </main>

      <NewUserModal />
      <EditUserModal />
      <DeleteUserModal />
      <NewBankAccountModal />
      <EditBankAccountModal />
      <DeleteBankAccountModal />
      <GlobalStyle />
    </>
  )
}

export default App
