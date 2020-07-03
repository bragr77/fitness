import React from 'react'
import buttonImg from '../images/add.png'
import './styles/ButtonAdd.css'
import { Link } from 'react-router-dom'

//arrow function o funcion de flecha nueva caracteristica de javascript ES7

const ButtonAdd = () => (
    <Link to="/exercise/new">
        <img src={buttonImg} alt="boton de adicionar" className="Fitness-Add" />            
    </Link>
)

//forma clasica de declarar funciones en javascript

/* function ButtonAdd(props) {
    return(
        <Link to="/exercise/new">
            <img src={buttonImg} alt="boton de adicionar" className="Fitness-Add" />            
        </Link>
    )
} */

export default ButtonAdd