import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LandingPage from './components/pages/LandingPage'
import ProfilePage from './components/pages/ProfilePage'
import NotFoundPage from './components/pages/NotFoundPage'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/frontend"
          element={<ProfilePage />}
        />
        <Route
          path="/analista"
          element={<ProfilePage />}
        />
        <Route
          path="/gestion"
          element={<ProfilePage />}
        />
        <Route
          path="/ai"
          element={<ProfilePage />}
        />
        <Route
          path="/fullstack"
          element={<ProfilePage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  )
}

export default App
