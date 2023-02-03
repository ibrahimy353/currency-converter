import { ChakraProvider } from '@chakra-ui/react';
import {QuerClientProvider, QueryClient} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
    <QuerClientProvider cleint ={queryClient}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    
    </QuerClientProvider>
  </React.StrictMode>,
);
