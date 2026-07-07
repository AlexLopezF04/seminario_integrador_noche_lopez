import { useLocalStorage } from '../hooks/useLocalStorage'

const themes = [
  { label: 'Claro',  primary: '#6366f1', bg: '#ffffff', text: '#111827' },
  { label: 'Oscuro', primary: '#818cf8', bg: '#1f2937', text: '#f9fafb' },
  { label: 'Verde',  primary: '#22c55e', bg: '#f0fdf4', text: '#166534' },
  { label: 'Rojo',   primary: '#ef4444', bg: '#fef2f2', text: '#991b1b' },
]

export default function ThemeSelector() {
  const { value: activeTheme, set: setActiveTheme } = useLocalStorage('selected-theme', themes[0])

  const current = themes.find((t) => t.label === activeTheme.label) ?? themes[0]

  return (
    <div
      style={{
        background: current.bg,
        color: current.text,
        padding: 24,
        borderRadius: 8,
        maxWidth: 360,
        transition: 'all 0.2s',
      }}
    >
      <p style={{ margin: '0 0 12px', fontSize: 14, fontWeight: 600 }}>
        Tema persistido en localStorage
      </p>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {themes.map((t) => (
          <button
            key={t.label}
            onClick={() => setActiveTheme(t)}
            style={{
              padding: '6px 14px',
              background: current.label === t.label ? t.primary : '#f3f4f6',
              color: current.label === t.label ? '#fff' : '#374151',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: 13,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 13, margin: 0 }}>
        Tema activo: <strong>{current.label}</strong>
      </p>
    </div>
  )
}
