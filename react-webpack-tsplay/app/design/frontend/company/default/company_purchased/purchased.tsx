import React from 'react'
import ReactDOM from 'react-dom/client'
import Product from './Blocks/Product'

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
)