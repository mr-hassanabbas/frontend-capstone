import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SettingsPage from './pages/SettingsPage'

function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">Home</h1>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
