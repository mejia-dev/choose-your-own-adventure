import playerData from './PlayerData'

const Inventory = () => {

    const lootItems = playerData.inventory.map((item) => {
        return (
            <li key={item}>{item}</li>
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