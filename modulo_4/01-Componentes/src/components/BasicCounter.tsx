import { useReducer } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset':     return 0
  }
}

export default function BasicCounter() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>{count}</div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={() => dispatch({ type: 'decrement' })} style={btnStyle('#e00')}>-1</button>
        <button onClick={() => dispatch({ type: 'reset' })} style={btnStyle('#6b7280')}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })} style={btnStyle('#22c55e')}>+1</button>
      </div>
    </div>
  )
}

function btnStyle(color: string): React.CSSProperties {
  return {
    padding: '8px 20px',
    background: color,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
  }
}
