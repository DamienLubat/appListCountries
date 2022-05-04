import React from 'react';

//On peut remplacé props par "{ country }"
//props est une propiété qui contien des données et renvoie un élément React
//La, props = country du composent countries.js
const Card = (props) => {
    //console.log(props);
    const { country } = props;  //destructuring = const { country } = props.country; 
    //console.log(country);

    return (
       <li className='card'>
            <div className='data-container'>
                
                    {country.name.common}
                    
                
            </div>
        </li>
    );
};

export default Card;