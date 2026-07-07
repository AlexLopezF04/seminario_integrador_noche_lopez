import { useCounter } from '../hooks/useCounter'

export default function QuantitySelector() {
  const { count, increment, decrement, reset } = useCounter(1, 1, 10)

  return (
    <div style={{ textAlign: 'center' }}>
      <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 12 }}>
        Cantidad (mín: 1, máx: 10)
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center' }}>
        <button onClick={decrement} style={btnStyle('#e00')}>−</button>
        <span style={{ fontSize: 28, fontWeight: 700, minWidth: 40 }}>{count}</span>
        <button onClick={increment} style={btnStyle('#22c55e')}>+</button>
      </div>
      <button
        onClick={reset}
        style={{
          ...btnStyle('#6b7280'),
          marginTop: 12,
        }}
      >
        Reset
      </button>
    </div>
  )
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '8px 16px',
    background: color,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 18,
    fontWeight: 700,
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
