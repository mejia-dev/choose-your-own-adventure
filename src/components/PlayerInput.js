import PropTypes from 'prop-types'
import './PlayerInput.css'

const PlayerInput = (props) => {

    // const handleInput = (e) => {
    //     playerData.name = e.target.value
    // }

    const preventRefresh = (e) => {
        e.preventDefault();
        props.commitCrew(e.target.crewName.value);
        props.commitName(e.target.playerName.value);
    }

    return (
        <form onSubmit={preventRefresh}>
            
            <label> Ahoy! What be yer name!?
                <input type='text' 
                id='playerName'
                required
                />
            </label>
            <br />
            <label> Who are the scallywags wit' ye!?
                <input type='text' 
                id='crewName'
                />
            </label>
            <br />
            <button type='submit'>Arrrrrg!</button>
        </form>
    )
};

PlayerInput.propTypes = {
    commitName: PropTypes.func,
    commitCrew: PropTypes.func
}

export default PlayerInput;