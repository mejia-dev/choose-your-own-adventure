import playerData from './PlayerData'

const Inventory = () => {

    const lootItems = playerData.inventory.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })
    return(
        <>
        <h3>Inventory</h3>
        <ul>
            {lootItems}
        </ul>
        </>
    )
}

export default Inventory