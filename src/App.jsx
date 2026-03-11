import { Header } from "./Components/Header"
import { Home } from "./Pagues/Home"



export const App = () => {
  return (
    <>

    <body
      style={{
        backgroundImage: "url('./public/Fondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      {/* Todo el contenido de tu página */}
    </body>
    <Header/>
    <Home/>
    
    </>
  )
}

export default App
