import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
    const [ isModalOpen, setIsModalOpen ]= useState(false);
    const [ currentPhoto, setCurrentPhoto ]= useState();
    const [photos] = useState([
        {
            name: 'All Kids',
            category: 'gallery',
            description: 'Kids playing together outside'
        },
    ])


const currentPhotos = photos.filter(photo => photo.category === category);

const toggleModal = (image, i) => {
  setCurrentPhoto({ ...image, index: i });
  setIsModalOpen(!isModalOpen);
};

return (
  <div>
    {isModalOpen && (
      <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
    )}
    <div className="flex-row">
      {currentPhotos.map((image, i) => (
        <img
          src={require(`../../assets/images/${category}/${i}.jpg`).default}
          alt={image.name}
          className="img-thumbnail mx-1"
          onClick={() => toggleModal(image, i)}
          key={image.name}
        />
      ))}
    </div>
  </div>
);
};

export default PhotoList;
