import { Link } from "react-router-dom"

const App: React.FC = () => (
    <main className="flex items-center justify-center h-screen w-screen flex-col">
      <h1>Welcome to mah-pong</h1>
      <Link to="/login">
        Login
      </Link>
    </main>
  )

export default App