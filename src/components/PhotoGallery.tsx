import { SetStateAction, useState } from "react";

interface Props {
    photos: string[]
}

const PhotoGallery: React.FC<Props> = (props: Props) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const openPhoto = (photo: SetStateAction<null>) => {
        setSelectedPhoto(photo);
      };
    
      const closePhoto = () => {
        setSelectedPhoto(null);
      };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-8 mb-40">
      {props.photos.map((photo, index) => (
        <div
          key={index}
          className="flex justify-center items-center relative group cursor-pointer bg-lightBrown w-96 h-60 shadow-[0px_4px_4px_#00000040] hover:bg-mainOrange transition-all duration-1000 ease-out"
          onClick={() => openPhoto(photo)}
        >
          <div
            className="w-11/12 h-5/6 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${photo})` }}
          />
          <div
            className="hidden group-hover:flex items-center justify-center absolute inset-0 bg-black bg-opacity-75 text-white transition-opacity opacity-0"
          >
            Click to open
          </div>
        </div>
      ))}
      {selectedPhoto && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
          onClick={closePhoto}
        >
          <img src={selectedPhoto} alt="Selected Photo" className="max-h-full max-w-full" />
        </div>
      )}
    </div>
  );
};
  
  export default PhotoGallery;