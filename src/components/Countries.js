import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    /*les hooks*/
    const [data, setData] = useState([]);   //setData va actualiser data
    const [playOnce, setPlayOnce] = useState(true);

    
    /*On rebouble que si un evenement que l'on mettre entre crocher a été changer*/
    useEffect(() => {
        /*Bouble infini sans la useEffect*/
        axios
            .get('https://restcountries.com/v3.1/all?fields=name;region;population;capital;flags')
            .then((res) => {
                setData(res.data);
                setPlayOnce(false); //y passe que 1 fois par la, bye
            });

        //console.log(data);
    }, []);
    //console.log(data);

    //renvois la valeur data
    return (
        <div className='countries'>
            <ul className='countries-list'>
                {data.map((country) => (
                    <Card key={country.name.common} country={country} />
                ))}
                
            </ul>
        </div>
    );
};

export default Countries;