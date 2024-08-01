import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <BrowserRouter>
    <main className="scrollbar-hide dark text-foreground bg-background">
        <App />
      </main>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>,
)