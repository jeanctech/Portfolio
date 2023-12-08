import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import About  from './About'
import Skills from './Skills'
import '../Styles/Index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <About />
    <Skills />
  </React.StrictMode>,
)
