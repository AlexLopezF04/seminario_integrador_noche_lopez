// src/App.tsx
// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Descomenta el import del componente cuando trabajes en ese paso.       │
// └──────────────────────────────────────────────────────────────────────────┘

// PASO  1-13  — descomenta cuando trabajes en ese paso
// import WelcomeBanner   from './components/WelcomeBanner'
// import UserGreeting    from './components/UserGreeting'
// import FruitList       from './components/FruitList'

// PASO 14+   — siempre activos
import DigitalCounter  from './useState/DigitalCounter'
import UserProfileForm from './useState/UserProfileForm'
import TaskManager     from './useState/TaskManager'
import DocumentTitle   from './useEffect/DocumentTitle'
import FetchUser       from './useEffect/FetchUser'


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// │  14  UserProfileForm     — formulario con useState                      │
// │  15  DigitalCounter      — contador con useState                        │
// │  16  TaskManager         — CRUD de tareas con useState                  │
// │  17  DocumentTitle       — useEffect: título dinámico de pestaña        │
// │  18  FetchUser           — useEffect: fetch con loading/error           │
// └──────────────────────────────────────────────────────────────────────────┘
// PASO 1-13 — descomenta estos datos cuando trabajes en esos pasos
// const fruits = [
//   { name: 'Manzana', emoji: '🍎', calories: 52 },
//   { name: 'Banana',  emoji: '🍌', calories: 89 },
//   { name: 'Naranja', emoji: '🍊', calories: 47 },
// ]
//
// const catalog = [
//   { id: 1, name: 'Teclado mecánico',  price: 89.99 },
//   { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
//   { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
//   { id: 4, name: 'Webcam HD',         price: 59.99 },
// ]

const PASO: number = 18

export default function App() {
  const content = /*
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <>
      <UserGreeting 
        name="Carlos López Ruiz" 
        occupation="Desarrollador Frontend" 
        color='#e11d48'/>
      <br/>
      <UserGreeting 
        name="Alexander López Fuentes" 
        occupation="Estudiante de Desarrollador - UTE"
        color='#2111b2'/>
        <br/>
      <UserGreeting 
        name="Ana Maria Guerrero" 
        occupation="Estudiante de Odontología - UTE"
        color='#2111b2'/>
      </> : 
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> : 
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> : 
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) : */

    // Hooks: useState
    PASO === 14 ? <UserProfileForm /> :
    PASO === 15 ? <DigitalCounter initialValue={5} step={1} label="Contador de Servidores"/> :
    PASO === 16 ? <TaskManager /> :

    // Hooks: useEffect 30
    PASO === 17 ? <DocumentTitle initialTitle="Documentos - React" /> :
    PASO === 18 ? <FetchUser defaultUserId={3} /> :

    // Hooks: useRef
    // Hooks: useReducer
    // Hooks: useContext
    // Hooks: useMemo
    // Hooks: useCallback

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>


  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}