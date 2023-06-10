const Header = () => {
    return (
        <>
            <h1>Hero:</h1>
            <Test name="Kamen Rider Hibiki" />
        </>
    )
}

const Test = (props: any) => {
    return <b>ABC {props.name}</b>
}

export default Header;