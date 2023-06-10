const Headerx = () => {
    return (
        <>
            <h1>Hero:</h1>
            <Test name="HEader" />
        </>
    )
}

const Test = (props: any) => {
    return <b>ABC {props.name}</b>
}

export default Headerx;