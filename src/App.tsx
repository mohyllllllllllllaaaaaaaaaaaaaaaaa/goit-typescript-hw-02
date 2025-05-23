import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { getPhotos } from './ApiService/photos';
import Loader from './components/Loader/Loader';
import LoadMoreButton from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import { Toaster } from "react-hot-toast";
import { UnsplashPhoto } from './ApiService/photos';



interface ModalImage {
  src: string;
  alt: string;
}

function App() {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage>({ src: "", alt: "" });
  const [totalPages, setTotalPages] = useState<number>(0);
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);

  useEffect(() => {
   
    if (!query) return;

    const fetchItems = async () => {
      setLoading(true);
      setError("");
      try {
        const { results, total_pages } = await getPhotos(query, page);
        setImages((prev) => (page === 1 ? results : [...prev, ...results]));
        setTotalPages(total_pages);
       if (page > 1) setShouldScroll(true);
      } catch ( error ) {
        setError("Failed to load images. Try again later.");
      } finally {
        setLoading(false);
      }
    };
  

    fetchItems();
  }, [page, query]);

  useEffect(() => {
    if (shouldScroll) {
      window.scrollBy({
        top: -window.innerHeight / -2,
        behavior: 'smooth',
      });
      setShouldScroll(false);
    }
  }, [images, shouldScroll]);

  const onHandelSubmit = (newQuery: string) => {
    if (newQuery === query)return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = () => {
 setShowModal(false);
 setModalImage({ src: "", alt: "" });
  
  };

  const openModal = ({src, alt}: ModalImage) => {
    setModalImage({src, alt});
    setShowModal(true)
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={onHandelSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && !loading && (
        <LoadMoreButton onClick={handleLoadMore} disabled={false} />
      )}
     
      {showModal && modalImage.src && (
      <ImageModal
        isOpen={showModal}
        onClose={closeModal}
        src={modalImage.src}
        alt={modalImage.alt}
      />
    )}
    </>
  );
}


export default App;
