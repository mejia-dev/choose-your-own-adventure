import playerData from './PlayerData'

const Inventory = () => {

    const lootItems = playerData.inventory.map((item) => {
        return (
            <li>{item}</li>
        )
    })
    return(
        <>
        <ul>
            {lootItems}
        </ul>
        </>
    )
}

export default Inventory