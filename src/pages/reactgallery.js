import ImageGallery from 'react-image-gallery'
import { Player } from 'video-react';
import 'video.js/dist/video-js.css';


export default function ReactGallery(){
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]
    return (
    <>
      <ImageGallery
        items={images}
   
        />
        <div>
          aniket
        </div>
</>

    )
}