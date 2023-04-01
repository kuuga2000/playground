import { useState, useEffect } from 'react'
import HeroList from './HeroList'
import { Fragment } from 'react';
const Heroes = () => {
    const [namex, setNamex] = useState('Bloodseekerx');
    const [heroes, setHeroes] = useState([
        {
            id: 1, name: 'Bloodseeker', skill: 'Bloodrite', ult: 'Rupture'
        },
        {
            id: 2, name: 'Pudge', skill: 'Meat Hook', ult: 'Skill 4'
        },
        {
            id: 3, name: 'Anti Mage', skill: 'Mana Break', ult: 'Mana Void'
        }
    ]);

    const remove = (id) => {
        setHeroes((heroes) => heroes.filter(hero => hero.id !== id))
    }

    const aa = () => {
        setNamex('Anti Mage');
        console.log(namex + ' xs');
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setHeroes(data)
            })
    }, []);

    return (
        <Fragment>
            <a href="#" onClick={() => {
                aa()
            }}>Change Name</a>
            <HeroList heroes={heroes} btnRemove={remove} />
        </Fragment>
    )
}

export default Heroes