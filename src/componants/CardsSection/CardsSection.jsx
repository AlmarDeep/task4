import React from 'react'
import Cards from '../Cards/Cards'
import Container from 'react-bootstrap/Container';
import './CardsSection.css'


const CardsSection = () => {
    const data = [{
        icons: 'fas fa-heartbeat icon',
        cardtitle: 'lorem ipsum',
        cardtext: 'lorem lorem',
    },
    {
        icons: 'fas fa-pills icon',
        cardtitle: 'lorem ipsum',
        cardtext: 'lorem lorem',
    },
    {
        icons: 'fas fa-thermometer icon',
        cardtitle: 'lorem ipsum',
        cardtext: 'lorem lorem',
    },
    {
        icons: 'fas fa-dna icon',
        cardtitle: 'lorem ipsum',
        cardtext: 'lorem lorem',
    },

    ];
    return (

        <div className='cardsection '>

            {
                data.map((element, index) => {
                    return (
                        <Cards key={index} icons={element.icons} cardtitle={element.cardtitle} cardtext={element.cardtext} />
                    )
                })
            }
        </div>
    )
}

export default CardsSection