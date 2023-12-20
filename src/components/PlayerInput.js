import playerData from './PlayerData'
import PropTypes from 'prop-types'

const PlayerInput = (props) => {

    const handleInput = (e) => {
        playerData.name = e.target.value
    }

    const preventRefresh = (e) => {
        e.preventDefault();
        props.commitName(playerData.name);
    }

    return (
        <form onSubmit={preventRefresh}>
            
            <label> Ahoy! What be yer name!?
                <input type='text' 
                id='player-name'
                onChange={handleInput}/>
            </label>

            <button type='submit'>Arrrrrg!</button>
        </form>
    )
};

PlayerInput.propTypes = {
    commitName: PropTypes.func
}

export default PlayerInput;