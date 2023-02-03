import { ChakraProvider } from '@chakra-ui/react';
import {QuerClientProvider, QueryClient} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
    <QuerClientProvider cleint ={queryClient}>
    <ChakraProvider>
      <App />
      <ReactQueryDevtools initialIsOpen= {false} position={'bottom-right'}/>
    </ChakraProvider>
    </QuerClientProvider>
  </React.StrictMode>,
);
