import AppRouter from './app.routes';
import { AuthProvider } from './features/auth/auth.Context';
import './features/shared/global.scss'


function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
