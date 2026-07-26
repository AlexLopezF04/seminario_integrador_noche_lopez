import { useState, useRef, useEffect } from 'react'

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef<number | null>(null)

  function start() {
    if (intervalRef.current !== null) return
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  function stop() {
    if (intervalRef.current === null) return
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function reset() {
    stop()
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current)
    }
  }, [])

  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`

  return (
    <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: 4, marginBottom: 16 }}>
        {display}
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={start} style={btnStyle('#22c55e')}>Iniciar</button>
        <button onClick={stop} style={btnStyle('#e00')}>Detener</button>
        <button onClick={reset} style={btnStyle('#6366f1')}>Reiniciar</button>
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
