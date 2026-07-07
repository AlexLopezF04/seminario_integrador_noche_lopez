import { useClipboard } from '../hooks/useClipboard'

const code = `export default function Hello() {
  return <h1>Hola Mundo</h1>
}`

export default function CodeBlock() {
  const { copied, copy } = useClipboard()

  return (
    <div
      style={{
        maxWidth: 420,
        background: '#1f2937',
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 14px',
          background: '#374151',
        }}
      >
        <span style={{ color: '#9ca3af', fontSize: 12 }}>React Component</span>
        <button
          onClick={() => copy(code)}
          style={{
            padding: '4px 12px',
            background: copied ? '#22c55e' : '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>
      <pre
        style={{
          padding: 16,
          margin: 0,
          color: '#e2e8f0',
          fontSize: 14,
          fontFamily: 'monospace',
          lineHeight: 1.6,
          overflowX: 'auto',
        }}
      >
        {code}
      </pre>
    </div>
  )
}
