import './ColorButton.css'


function ColorButton({color,useColor,}) {

 return(<div onClick={useColor} style={{background:color}} id={color} ></div>)
}

 export default ColorButton