import Modal from 'react-modal';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}
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
 
  export const ImageModal =({ isOpen, onClose, src, alt}: ImageModalProps) => {
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