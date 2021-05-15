import ModalContent from './ModalContent'

const Modal = ({ isOpened, onModalClose, content }) => {
    const { Title = 'N/A', Type = 'N/A' } = content
    const arrayKeys = []
    for (const key in content) {
        arrayKeys.push(key)
    }
    return (
        <div className={`modal-detail${isOpened ? ' open' : ''}`} onClick={onModalClose}>
            <div className="modal-detail-content" onClick={e => e.stopPropagation()}>
                <span className="modal-close" onClick={onModalClose}>&times;</span>
                <h5 className="modal-title">{Title} <span>({Type})</span></h5>
                <hr />
                <ul className="modal-collection">
                    {arrayKeys.map((k, ki) => <ModalContent key={ki} k={k}  content={content} />)}
                </ul>
            </div>      
        </div>
    )
}

export default Modal
