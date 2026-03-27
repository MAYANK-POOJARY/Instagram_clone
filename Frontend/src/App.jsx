import AppRouter from './AppRouter';
import { AuthProvider } from './features/auth/auth.Context';
import './style.scss'


function App() {
  return (
    <AuthProvider>
     <AppRouter />
    </AuthProvider>
  )
}

export default App
