import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ModalProvider } from './contexts/modal-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
)
