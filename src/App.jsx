import { Box } from '@chakra-ui/react'
import CodeEditor from './components/CodeEditor'
import Landing from './components/Landing'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Authentication from './components/Authentication'
import Login from './components/Login'
import Home from './components/Home'
import Canvas from './components/Canvas'
function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route exact path="/auth">
            <Authentication />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/code">
            <Box minH="100vh" minW="100vw" bg="#0f0a19" color='gray.500' px={6} py={7}>
              <CodeEditor />
            </Box>
          </Route>

          <Route exact path="/canvas">
            <Canvas />
          </Route>


        </Switch>
      </Router>

      {/* <Box minH="100vh" bg="#0f0a19" color='gray.500' px={6} py={7}>
        <CodeEditor />
      </Box> */}

    </>
  )
}

export default App
