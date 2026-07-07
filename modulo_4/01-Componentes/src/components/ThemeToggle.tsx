import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const bg = theme === 'light' ? '#ffffff' : '#1f2937'
  const color = theme === 'light' ? '#111827' : '#f9fafb'

  return (
    <div
      style={{
        background: bg,
        color,
        padding: '20px',
        borderRadius: 8,
        transition: 'all 0.2s',
      }}
    >
      <p style={{ margin: '0 0 12px' }}>Tema actual: <strong>{theme}</strong></p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '8px 20px',
          background: theme === 'light' ? '#111827' : '#f9fafb',
          color: theme === 'light' ? '#f9fafb' : '#111827',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontWeight: 600,
        }}
      >
        Cambiar a {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>
  )
}
