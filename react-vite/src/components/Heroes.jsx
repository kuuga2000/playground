import { useState } from 'react'
import HeroList from './HeroList'
const Heroes = () => {
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
    };

    return (
        <HeroList heroes={heroes} btnRemove={remove} />
    )
}

export default Heroes