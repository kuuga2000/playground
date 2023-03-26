import { Fragment } from 'react'
import Navbar from './Navbar'
import '../sass/global.scss'

const Header = (props) => {
    return (
        <Fragment>
            <Header2 message={props.message} />
            <Navbar />
        </Fragment>
    )
}

const Header2 = ({ message }) => {
    return <h1 className="header">Header2 {message}</h1>
}

export default Header;