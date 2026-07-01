export default function WelcomeBanner() {
  return (
    <main style={{maxWidth: 400, 
                  margin: '40px auto', 
                  fontFamily: 'sans-serif',
                  color: '#041b12' }}>
      <h1>Hola desde React 19 + TypeScript</h1>
      <h2>Proyecto configurado con Vite 8.</h2>
      <p>Versión: 1.0.0</p>
        <p style={{ fontStyle: 'italic' }}>
        Autor: Alexander López
        </p>
      <i>Autor: Alexander López</i>
    </main>
  )
}