import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import mytheme from './theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={mytheme}>
      <App />
    </ChakraProvider>

    {/* <App /> */}

  </React.StrictMode>,
)
