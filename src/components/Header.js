import PropTypes from 'prop-types'
import './Header.css'

const Header = (props) => {
    return(
        <>
        <div className="spacer"></div>
        <h1 className="header">
            🏴‍☠️Treasures of the Tides🦜
        </h1>
        <div>
            <button onClick={()=> props.signOutFunc()}>Sign out</button>
        </div>
        </>
    )
}

Header.propTypes = {
    signoutFunc: PropTypes.func
}

export default Header;