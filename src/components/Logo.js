import React from 'react';

const Logo = () => {
    /*La racine est dans le fichier public car il y a l'index*/
    return (
        <div className='logo'>
            <img src='logo192.png' alt='logo'/>
            <h3>React Word</h3>
        </div>
    );
};

export default Logo;