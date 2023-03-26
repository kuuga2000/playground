import '../sass/global.scss'

const Header = (props) => {
    return <Header2 message={props.message}/>
}

const Header2 = ({message}) => {
    return <h1 className="header">Header2 {message}</h1>
}

export default Header;