//antigua forma
/* const element = document.createElement('h1');
element.innerText = "Hola Mundo";
const container = document.getElementById('root');
container.appendChild(element); */

//con react

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'


const container = document.getElementById('root')
//ReactDOM.render (_QUE_ , _DONDE_)
ReactDOM.render(<App/>, container)