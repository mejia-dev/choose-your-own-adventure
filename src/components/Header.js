import PropTypes from 'prop-types'

const Header = (props) => {
    return(
        <>
        <h1>
            Treasures of the Tides
        </h1>
        <button onClick={()=> props.signOutFunc()}>Sign out</button>
        </>
    )
}

Header.propTypes = {
    signoutFunc: PropTypes.func
}

export default Header;