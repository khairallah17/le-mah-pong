import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './pages/login.tsx'
import Dashboard from './pages/dashboard.tsx'
import Layout from "./components/layout.tsx"
import Chat from "./pages/chat.tsx"
import Shop from "./pages/shop.tsx"
import Overview from "./pages/dashboard/overview.tsx"
import Game from "./pages/dashboard/game.tsx"
import Leaderboard from "./pages/dashboard/leaderboard.tsx"
import SearchPage from "./pages/SearchPage.tsx"
import SecurityPage from "./pages/SecurityProfile.tsx"
import Profile from "./pages/profile.tsx"

// CONTEXT PROVIDERS
import Providers from "./providers/providers.tsx"

// SUSPENSE BOUNDARY
import { Suspense } from "react"
import Loading from "./components/loading.tsx"

const App: React.FC = () => (
    <BrowserRouter>
        <Providers>
            <Suspense fallback={<Loading/>}>
                <Routes>
                        <Route path="/" element={<Login/>} />
                        <Route element={<Layout/>}>
                            <Route path="dashboard" element={<Dashboard/>}/>
                            <Route path="dashboard/overview" element={<Overview/>}/>
                            <Route path="dashboard/game" element={<Game/>}/>
                            <Route path="dashboard/leaderboard" element={<Leaderboard/>}/>
                            <Route path="dashboard/chat" element={<Chat/>} />
                            <Route path="dashboard/shop" element={<Shop/>} />
                            <Route path="dashboard/profile" element={<Profile/>} />
                            <Route path="dashboard/security" element={<SecurityPage/>} />
                            <Route path="dashboard/SearchPage" element={<SearchPage/>} />
                        </Route>
                </Routes>
            </Suspense>
        </Providers>
    </BrowserRouter>
)

export default App
