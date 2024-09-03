import './ModalWin.css'

function ModalWin({conditionModal}) {
	return (
		<div className={'contentText'} style={{display: conditionModal ? 'flex' : 'none'}}>
			<div className={'text'}>
				<p>Win</p>
			</div>
		</div>
	)
}

export default ModalWin
