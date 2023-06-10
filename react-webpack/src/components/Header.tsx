const Header = () => {
    return (
        <>
            <h1>as sx</h1>
            <Test name="Kamen Rider Black Rx bb" />
        </>
    )
}

const Test = (props: any) => {
    return <b>ABC {props.name}</b>
}

export default Header;