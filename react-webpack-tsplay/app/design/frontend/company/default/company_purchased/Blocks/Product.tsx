
import React from 'react'
const Header = () => {
    return (
        <>
            <h1>Hero:</h1>
            <ProductList name="Kamen Rider List" />
        </>
    )
}

const ProductList = (props: any) => {
    return <b>ABC {props.name}</b>
}

export default Header;