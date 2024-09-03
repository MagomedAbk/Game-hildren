import './ColorButton.css'

function ColorButton({color, onClick}) {

	return (<button onClick={onClick} style={{background: color}}/>)
}

export default ColorButton
