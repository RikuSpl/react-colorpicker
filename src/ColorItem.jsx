import "./index.css"

function ColorItem({ color, hex }) {

    return (
        <>
            <li className={`color-item ${color}`} style={{backgroundColor: hex}}></li>
        </>
    )
}

export default ColorItem