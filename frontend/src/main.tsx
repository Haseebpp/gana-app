import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/core/store'
import AppRoutes from '@/routes/AppRoutes'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
)
