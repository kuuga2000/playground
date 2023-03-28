import { Fragment, useState } from "react"
import {Helper, callLogz} from './Helper'

const Body = () => {
    const [name, setName] = useState('Kamen Rider')
    const [age, setAge] = useState(1);
    const handleClick = () => {
        setName('Kamen Rider Rx')
    }
    const handleInput = (e) => {
        let value = e.target.value;
        Helper.callParam(value)
        callLogz(value)
        setName(value)
    }
    const increaseNumber = () => {
        setAge((age) => age + 1);
    }
    return (
        <Fragment>
            <div>{name} {age}</div>
            <input type="text" onKeyUp={(e)=>{
                handleInput(e);
            }} />
            <button onClick={() => {
                increaseNumber();
            }}>Click Me</button>
        </Fragment>
    )
}

export default Body;