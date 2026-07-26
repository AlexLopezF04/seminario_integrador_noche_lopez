import { useState, useRef, useEffect } from 'react'

export default function PreviousValue() {
  const [value, setValue] = useState('')
  const prevRef = useRef<string>('')

  useEffect(() => {
    prevRef.current = value
  }, [value])

  return (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe algo aquí..."
        style={{
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: 6,
          fontSize: 14,
        }}
      />
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        Valor anterior: <strong style={{ color: '#6366f1' }}>{prevRef.current || '(ninguno)'}</strong>
      </div>
      <div style={{ fontSize: 14, color: '#6b7280' }}>
        Valor actual: <strong style={{ color: '#22c55e' }}>{value || '(vacío)'}</strong>
      </div>
    </div>
  )
}
