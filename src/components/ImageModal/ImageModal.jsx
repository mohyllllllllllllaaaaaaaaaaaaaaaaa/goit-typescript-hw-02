import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay:{
      background: "rgba(0,0,0,0.6)"
    }
  };
  Modal.setAppElement('#root');
  export const ImageModal =({ isOpen, onClose, src, alt}) => {
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        <img src={src} alt={alt}/>
      </Modal>
    );
  }
  export default ImageModal;