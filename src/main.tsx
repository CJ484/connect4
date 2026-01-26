import { Provider } from 'react-redux';
import store from './Redux/store.ts';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/utils/i18N/index.js'
import '@/styles/variables.css'
import '@/styles/global.scss'
import Layout from './layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </StrictMode>,
)
