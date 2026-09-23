import { useState } from "react"
import "./index.css"

function ColorItem({ color, hex }) {

    const [hoverState, setHoverState] = useState(false)
    const [copied, setCopied] = useState(hex)

    function handleMouseEnter() {
        setHoverState(true)
    }

    function handleMouseLeave() {
        setHoverState(false)
        setCopied(hex)
    }

    function handleClick() {
        navigator.clipboard.writeText(hex)
        setCopied("Copied!")
    }

    return (
        <>
            {hoverState === true ? 
                (<li 
                className={`color-item`} 
                style={{backgroundColor: hex}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
                ><span>{copied}</span></li>) : (
                    <li 
                    className={`color-item`} 
                    style={{backgroundColor: hex}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ><span>{color}</span></li>
                )
            }
            
        </>
    )
}

export default ColorItem