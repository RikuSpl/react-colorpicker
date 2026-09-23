import ColorItem from "./ColorItem"
import "./index.css"

function App() {

  const colors = [
    {color: "pink", hex: "#fac3d9"},
    {color: "red", hex: "#822c35"},
    {color: "blue", hex: "#426dc9"},
    {color: "yellow", hex: "#f5f25d"},
    {color: "green", hex: "#5abf6c"},
  ]

  return (
    <>
      <div className="color-picker-div">
        <h1>Color picker</h1>
        <div className="colors">
          <ul>
            {colors.map((c) => (<ColorItem key={c.color} color={c.color} hex={c.hex} />))} 
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
