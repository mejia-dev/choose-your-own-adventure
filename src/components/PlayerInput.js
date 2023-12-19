import playerData from './PlayerData'

const PlayerInput = () => {

    const handleInput = (e) => {
        playerData.name = e.target.value
        console.log(playerData.name)
    }

    const preventRefresh = (e) => {
        e.preventDefault();
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

export default PlayerInput;