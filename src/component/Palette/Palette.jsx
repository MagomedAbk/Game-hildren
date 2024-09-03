import './Palette.css'
import ColorButton from '../ColorButton/ColorButton.jsx'

const colors = [
	'red',
	'brown',
	'blue',
	'yellow',
	'orange',
	'green',
	'black',
	'white',
	'cyan',
	'violet',
]

export function Palette({sendData}) {
	const handleClick = (color) => {
		return () => {
			sendData(color)
		}
	}

	return (
		<div className="color">
			<div className="colorTop">
				{colors.slice(0, 5).map((color) => (
					<ColorButton key={color} color={color} onClick={handleClick(color)}/>
				))}
			</div>
			<div className="colorBottom">
				{colors.slice(5).map((color) => (
					<ColorButton key={color} color={color} onClick={handleClick(color)}/>
				))}
			</div>
		</div>
	)
}
