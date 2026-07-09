// src/App.tsx

import { useState } from 'react'
import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
import DigitalCounter  from './useState/DigitalCounter'
import UserProfileForm from './useState/UserProfileForm'
import TaskManager     from './useState/TaskManager'
import DocumentTitle   from './useEffect/DocumentTitle'
import FetchUser            from './useEffect/FetchUser'
import SafeCounter          from './useState/SafeCounter'
import CatalogProductItem   from './components/CatalogProductItem'
import ShoppingCartSummary  from './components/ShoppingCartSummary'
import OnlineStatus         from './useEffect/OnlineStatus'
import WindowSize           from './useEffect/WindowSize'
import LiveClock            from './useEffect/LiveClock'
import SearchWithEffect     from './useEffect/SearchWithEffect'
import DebounceSearch       from './useEffect/DebounceSearch'
import AutoFocusInput       from './useRef/AutoFocusInput'
import AutoFocusForm        from './useRef/AutoFocusForm'
import Stopwatch            from './useRef/Stopwatch'
import InlineEditor         from './useRef/InlineEditor'
import PreviousValue        from './useRef/PreviousValue'
import BasicCounter         from './components/BasicCounter'
import RegistrationForm     from './components/RegistrationForm'
import ShoppingCart         from './components/ShoppingCart'
import ThemeToggle          from './components/ThemeToggle'
import UserBadge            from './components/UserBadge'
import LoginForm            from './components/LoginForm'
import AppHeader            from './components/AppHeader'
import PrimeSieve           from './components/PrimeSieve'
import FilteredCatalog      from './components/FilteredCatalog'
import OrderMetrics         from './components/OrderMetrics'
import MultiTagFilter       from './components/MultiTagFilter'
import MemoizedList         from './components/MemoizedList'
import SearchWithFetch      from './components/SearchWithFetch'
import FilterTable          from './components/FilterTable'
import PaginatedFetch       from './components/PaginatedFetch'
import ModalDemo            from './components/ModalDemo'
import QuantitySelector     from './components/QuantitySelector'
import ThemeSelector        from './components/ThemeSelector'
import LiveSearch           from './components/LiveSearch'
import PostList             from './components/PostList'
import ResponsiveLayout     from './components/ResponsiveLayout'
import CodeBlock            from './components/CodeBlock'

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
// │  19  SafeCounter         — useState con forma funcional prev => prev   │
// │  20  Carrito useState    — array de objetos + lógica en App.tsx         │
// │  21  OnlineStatus        — useEffect: eventos online/offline             │
// │  22  WindowSize          — useEffect: resize, estado objeto tipado       │
// │  23  LiveClock           — useEffect: setInterval + inicializador perez. │
// │  24  SearchWithEffect    — useEffect: búsqueda sincronizada con query    │
// │  25  DebounceSearch      — useEffect: setTimeout/clearTimeout, debounce  │
// │  26  AutoFocusInput      — useRef + useEffect: foco imperativo           │
// │  27  AutoFocusForm       — useRef: foco entre múltiples campos           │
// │  28  Stopwatch           — useRef: almacenar ID de intervalo             │
// │  29  InlineEditor        — useRef: foco imperativo en edición inline    │
// │  30  PreviousValue       — useRef: preservar valor anterior del estado   │
// │  31  BasicCounter        — useReducer: contador simple                    │
// │  32  RegistrationForm    — useReducer: formulario multi-campo             │
// │  33  ShoppingCart        — useReducer: carrito de compras                 │
// │  34  ThemeToggle         — useContext: ThemeContext                        │
// │  35  UserBadge           — useContext: AuthContext                         │
// │  36  LoginForm           — useContext: AuthContext + formulario            │
// │  37  AppHeader           — useContext: ThemeContext + AuthContext           │
// │  38  PrimeSieve          — useMemo: cálculo de números primos               │
// │  39  FilteredCatalog     — useMemo: filtro de catálogo                      │
// │  40  OrderMetrics        — useMemo: métricas de pedidos                     │
// │  41  MultiTagFilter      — useMemo: filtro multi-etiqueta                   │
// │  42  MemoizedList        — useCallback + React.memo: lista optimizada      │
// │  43  SearchWithFetch     — useCallback: búsqueda con fetch                  │
// │  44  FilterTable         — useCallback: filtros de tabla                    │
// │  45  PaginatedFetch      — useCallback: paginación con fetch                │
// │  46  ModalDemo           — useToggle: apertura/cierre de modal              │
// │  47  QuantitySelector    — useCounter: selector de cantidad                  │
// │  48  ThemeSelector       — useLocalStorage: tema persistido                 │
// │  49  LiveSearch          — useDebounce + useFetch: búsqueda en vivo          │
// │  50  PostList            — useFetch: lista paginada de posts                 │
// │  51  ResponsiveLayout    — useMediaQuery + useWindowSize: layout responsive │
// │  52  CodeBlock           — useClipboard: copiar código al portapapeles       │
// └──────────────────────────────────────────────────────────────────────────┘
const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

const cartProducts = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27"',       price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99 },
]

interface CartItem { id: number; name: string; price: number }

const EXAMPLE_CODE = `export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue(v => !v), [])
  return { value, toggle }
}`

const PASO: number = 46

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(id: number, name: string, price: number) {
    const alreadyInCart = cartItems.some((item) => item.id === id)
    if (alreadyInCart) return
    setCartItems((prev) => [...prev, { id, name, price }])
  }

  function handleClearCart() {
    setCartItems([])
  }
  const content =
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
    ) :

    // Hooks: useState
    PASO === 14 ? <UserProfileForm /> :
    PASO === 15 ? <DigitalCounter initialValue={5} step={1} label="Contador de Servidores"/> :
    PASO === 16 ? <TaskManager /> :

    PASO === 17 ? <DocumentTitle initialTitle="Documentos - React" /> :
    PASO === 18 ? <FetchUser defaultUserId={3} /> :

    PASO === 19 ? <SafeCounter /> :
    PASO === 20 ? (
      <>
        <h1 style={{ fontSize: 22 }}>Tienda</h1>
        <section>
          {cartProducts.map((p) => (
            <CatalogProductItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              onAddToCart={handleAddToCart}
            />
          ))}
        </section>
        <ShoppingCartSummary items={cartItems} onClearCart={handleClearCart} />
      </>
    ) :

    // Hooks: useEffect
    PASO === 21 ? <OnlineStatus /> :
    PASO === 22 ? <WindowSize /> :
    PASO === 23 ? <LiveClock /> :
    PASO === 24 ? <SearchWithEffect /> :
    PASO === 25 ? <DebounceSearch /> :
    PASO === 26 ? <AutoFocusInput /> :

    // Hooks: useRef
    PASO === 27 ? <AutoFocusForm /> :
    PASO === 28 ? <Stopwatch /> :
    PASO === 29 ? <InlineEditor /> :
    PASO === 30 ? <PreviousValue /> :

    // Hooks: useReducer
    PASO === 31 ? <BasicCounter /> :
    PASO === 32 ? <RegistrationForm /> :
    PASO === 33 ? <ShoppingCart /> :

    // Hooks: useContext
    PASO === 34 ? <ThemeToggle /> :
    PASO === 35 ? <UserBadge /> :
    PASO === 36 ? <LoginForm /> :
    PASO === 37 ? <AppHeader /> :

    // Hooks: useMemo
    PASO === 38 ? <PrimeSieve /> :
    PASO === 39 ? <FilteredCatalog /> :
    PASO === 40 ? <OrderMetrics /> :
    PASO === 41 ? <MultiTagFilter /> :

    // Hooks: useCallback
    PASO === 42 ? <MemoizedList /> :
    PASO === 43 ? <SearchWithFetch /> :
    PASO === 44 ? <FilterTable /> :
    PASO === 45 ? <PaginatedFetch /> :

    // Hooks personalizados
    PASO === 46 ? <ModalDemo /> :
    PASO === 47 ? <QuantitySelector /> :
    PASO === 48 ? <ThemeSelector /> :
    PASO === 49 ? <LiveSearch /> :
    PASO === 50 ? <PostList /> :
    PASO === 51 ? <ResponsiveLayout /> :
    PASO === 52 ? <CodeBlock code={EXAMPLE_CODE} language="tsx" /> :

    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>


  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}