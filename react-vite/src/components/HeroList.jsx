const HeroList = ({heroes, btnRemove}) => {
    return (
        <ul>
            {heroes.map((hero) => (
                <li className="test abc" key={hero.id} style={{ listStyle: 'none' }}>
                    {hero.name} - <a href="#" onClick={() => {
                        btnRemove(hero.id)
                    }}>Remove</a>
                </li>
            ))}
        </ul>
    )
}

export default HeroList