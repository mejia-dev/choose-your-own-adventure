import PropTypes from "prop-types"

const Inventory = (props) => {
    const lootItems = props.inventoryData.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })
    return (
        <>
            <h3>Inventory</h3>
            <ul>
                {lootItems}
            </ul>
        </>
    )
}

Inventory.propTypes = {
    inventoryData: PropTypes.array
}

export default Inventory