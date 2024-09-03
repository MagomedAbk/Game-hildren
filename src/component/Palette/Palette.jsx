import './Palette.css'
import ColorButton from '../ColorButton/ColorButton.jsx';


function Palette({sendData}) {
	function useColor(e) {
		sendData(e.target.id)
	}

	return(
		<div	className={"color"}>
			<p>'lol'</p>
			<div className={'colorTop'}>
				<ColorButton color={'red'} useColor={useColor} />
				<ColorButton color={'brown'} useColor={useColor} />
				<ColorButton color={'blue'} useColor={useColor} />
				<ColorButton color={'yellow'} useColor={useColor} />
				<ColorButton color={'orange'} useColor={useColor} />
			</div>
			<div className={'colorBottom'}>
				<ColorButton color={'green'} useColor={useColor} />
				<ColorButton color={'black'} useColor={useColor} />
				<ColorButton color={'white'} useColor={useColor} />
				<ColorButton color={'cyan'} useColor={useColor} />
				<ColorButton color={'violet'} useColor={useColor} />
			</div>
		</div>
	)
}

export default Palette

// <div className={'colorTop'}>
// 	<div onClick={useColor} style={{background:'red'}} id={'red'}></div>
// <div onClick={useColor} style={{background:'brown'}} id={'brown'}></div>
// <div onClick={useColor} style={{background:'blue'}} id={'blue'}></div>
// <div onClick={useColor} style={{background:'yellow'}} id={'yellow'}></div>
// <div onClick={useColor} style={{background:'orange'}} id={'orange'}></div>
// </div>
// <div className={'colorBottom'}>
// 	<div onClick={useColor} style={{background:'green'}} id={'green'}></div>
// 	<div onClick={useColor} style={{background:'black'}} id={'black'}></div>
// 	<div onClick={useColor} style={{background:'white'}} id={'white'}></div>
// 	<div onClick={useColor} style={{background:'cyan'}} id={'cyan'}></div>
// 	<div onClick={useColor} style={{background:'violet'}} id={'violet'}></div>
// </div>