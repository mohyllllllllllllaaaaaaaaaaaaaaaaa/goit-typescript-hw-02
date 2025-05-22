import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getPhotos } from './ApiService/photos';
import Loader from './components/Loader/Loader';
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Toaster } from "react-hot-toast";
 

function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState({ src: "", alt: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
   
    if (!query) return;

    const fetchItems = async () => {
      setLoading(true);
      setError("");
      try {
        const { results, total_pages } = await getPhotos(query, page);
        setImages((prev) => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(total_pages);
      // eslint-disable-next-line no-unused-vars
      } catch ( error ) {
        setError("Failed to load images. Try again later.");
      } finally {
        setLoading(false);
      }
    };
  

    fetchItems();
  }, [page, query]);

  const onHandelSubmit = (newQuery) => {
    if (newQuery === query)return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleLoadMore = () => {
    loadMore();
    setIsScrolling(true);

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);};

  const closeModal = () => {
 setShowModal(false);
 setModalImage({ src: "", alt: "" });
  
  };

  const openModal = ({src, alt}) => {
    setModalImage({src, alt});
    setShowModal(true)
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={onHandelSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal}/>
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreButton onClick={handleLoadMore} disabled={isScrolling} />
      )}
     
      <ImageModal
        isOpen={showModal}
        onClose={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    </>
  );
}


export default App;
