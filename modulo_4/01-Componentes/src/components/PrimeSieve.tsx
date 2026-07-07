import { useState, useMemo } from 'react'

function calculatePrimes(limit: number): number[] {
  const primes: number[] = []
  for (let n = 2; n <= limit; n++) {
    let isPrime = true
    for (let d = 2; d * d <= n; d++) {
      if (n % d === 0) { isPrime = false; break }
    }
    if (isPrime) primes.push(n)
  }
  return primes
}

export default function PrimeSieve() {
  const [limit, setLimit] = useState(100)

  const { primes, elapsed } = useMemo(() => {
    const start = performance.now()
    const result = calculatePrimes(limit)
    return { primes: result, elapsed: (performance.now() - start).toFixed(2) }
  }, [limit])

  return (
    <div style={{ maxWidth: 400 }}>
      <label style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
        <span style={{ fontSize: 14 }}>Límite superior:</span>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(Math.max(2, Number(e.target.value)))}
          min={2}
          style={{
            padding: '8px 12px',
            border: '1px solid #d1d5db',
            borderRadius: 6,
            fontSize: 14,
          }}
        />
      </label>
      <p style={{ fontSize: 13, color: '#6b7280' }}>
        {primes.length} primos encontrados (en {elapsed}ms)
      </p>
      <div
        style={{
          maxHeight: 200,
          overflowY: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          padding: 8,
          background: '#f9fafb',
          borderRadius: 6,
        }}
      >
        {primes.map((p) => (
          <span
            key={p}
            style={{
              padding: '2px 8px',
              background: '#6366f1',
              color: '#fff',
              borderRadius: 4,
              fontSize: 12,
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}
