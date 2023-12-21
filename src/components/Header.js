import PropTypes from 'prop-types'
import './Header.css'

const Header = (props) => {
    return(
        <>
        <div className="header-container">
            <div className="spacer"></div>
            <h1 className="header">
                🏴‍☠️Treasures of the Tides🦜
            </h1>
            <div className="button-div">
                <button onClick={()=> props.signOutFunc()}>Sign out</button>
            </div>
        </div>
        </>
    )
}

Header.propTypes = {
    signoutFunc: PropTypes.func
}

export default Header;