import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-semibold">My App</div>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm">
            Home
          </Link>
          <Link to="/settings" className="text-sm">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  )
}
