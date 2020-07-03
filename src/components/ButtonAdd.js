import React from 'react'
import buttonImg from '../images/add.png'
import './styles/ButtonAdd.css'
import { Link } from 'react-router-dom'

function ButtonAdd(props) {
    return(
        <Link to="/exercise/new">
            <img src={buttonImg} alt="boton de adicionar" className="Fitness-Add" />            
        </Link>
    )
}

export default ButtonAdd