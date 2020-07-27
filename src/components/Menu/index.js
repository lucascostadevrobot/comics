import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button/index';
//import ButtonLink from '../ButtonLink/index';

function Menu (){
    //props => {CLassName: "O que alguém passar", href:"/"}
    return(
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="ComicsFLix logo" />
            </a>
         
        <Button as="a" className="ButtonLink" href="/">
           Novo vídeo
        </Button>

        </nav>
    );
}

export default Menu;