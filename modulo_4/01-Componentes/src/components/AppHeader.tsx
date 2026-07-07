import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'
import UserBadge from './UserBadge'

export default function AppHeader() {
  const { theme } = useTheme()

  const bg = theme === 'light' ? '#f3f4f6' : '#111827'
  const color = theme === 'light' ? '#111827' : '#f9fafb'

  return (
    <div
      style={{
        background: bg,
        color,
        padding: 24,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        transition: 'all 0.2s',
      }}
    >
      <h2 style={{ margin: 0, fontSize: 20 }}>AppHeader</h2>
      <p style={{ margin: 0, fontSize: 14 }}>
        Este componente usa <strong>ThemeContext</strong> y <strong>AuthContext</strong>
      </p>
      <ThemeToggle />
      <UserBadge />
    </div>
  )
}
