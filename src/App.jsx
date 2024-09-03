import './App.css'
import Slide from './component/Slide/Slide.jsx';
import Palette from './component/Palette/Palette.jsx';
import {useState} from 'react';
import ModalWin from './component/ModalWin/ModalWin.jsx';

function App() {
  let [valueModal,setValueModal] = useState(false)
  const [valueId,setValueId]=useState()
  const answer = (value) => {
  setValueId(value)
  };
  const conditionModal = (value) => {
    setValueModal(value)
  }

  return (
    <div className={'content'}>
      <Slide answer={valueId} conditionModal={conditionModal} />
      <Palette sendData={answer} />
      <ModalWin conditionModal={valueModal}/>
    </div>
  )
}

export default App

// function ParentComponent() {
//   const handleData = (data) => {
//     console.log(data);
//   };
//
//   return <ChildComponent sendData={handleData} />;
// }
//
// function ChildComponent(props) {
//   const data = "Hello from Child";
//   return <button onClick={() => props.sendData(data)}>Send Data</button>;
// }