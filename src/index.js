import React from 'react'
import ReactDOM from 'react-dom'
import Message from './js/Message'

import './css/style.css'

import { createRoot } from 'react-dom/client';

const domNode =  document.getElementById('react-container') // eslint-disable-line no-undef

const root = createRoot(domNode);

root.render(
  <Message />,
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

