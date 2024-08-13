import GalleryDetail from './GalleryDetail'
import GetHook from '../../../hook/GetHook'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const GalleryDetailContainer = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const { folder } = useParams();
  const { data, loading} = GetHook(`http://localhost:8080/test/${folder}`);

  useEffect(() => {
    if (Array.isArray(data)) {
      setImageUrls(data);
    } else {
      setImageUrls([]);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div style={styleNoImage}>Loading...</div>
      ) : (
        <div className='galleryDetailContainer'>
          <GalleryDetail images={imageUrls} />
        </div>
      )}
    </>
  );
}

const styleNoImage = {
  color: 'white',
  textAlign: 'center',
  fontSize: '40px',
  padding: '20px'
};

export default GalleryDetailContainer;
