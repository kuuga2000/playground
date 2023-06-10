
import React from 'react'
const Customer = () => {
    return (
        <>
            <h1>Page:</h1>
            <CustomerList name="This is Customer" />
        </>
    )
}

const CustomerList = (props: any) => {
    return <b>ABC {props.name}</b>
}

export default Customer;