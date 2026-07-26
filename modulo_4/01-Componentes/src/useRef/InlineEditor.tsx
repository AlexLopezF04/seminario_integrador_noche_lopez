import { useState, useRef } from 'react'

export default function InlineEditor() {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState('Haz clic en Editar para modificar este texto')
  const inputRef = useRef<HTMLInputElement>(null)

  function handleEdit() {
    setIsEditing(true)
    requestAnimationFrame(() => inputRef.current?.focus())
  }

  function handleSave() {
    setIsEditing(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSave()
    if (e.key === 'Escape') {
      setText('Haz clic en Editar para modificar este texto')
      setIsEditing(false)
    }
  }

  return (
    <div style={{ maxWidth: 400 }}>
      {isEditing ? (
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '2px solid #6366f1',
            borderRadius: 6,
            fontSize: 14,
            outline: 'none',
          }}
        />
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, padding: '8px 0' }}>{text}</span>
          <button onClick={handleEdit} style={btnStyle()}>Editar</button>
        </div>
      )}
    </div>
  )
}

const btnStyle = (): React.CSSProperties => ({
  padding: '6px 16px',
  background: '#6366f1',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 13,
  fontWeight: 600,
  whiteSpace: 'nowrap',
})
