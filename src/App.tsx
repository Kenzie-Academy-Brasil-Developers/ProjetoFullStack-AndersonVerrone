import { RoutesMain } from "./routes/RoutesMain"
import { GlobalStyles } from "./styles/GlobalStyles"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <RoutesMain />
      <Footer />
    </>
  )
}

export default App
