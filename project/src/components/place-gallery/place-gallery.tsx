type PlaceGalleryProps = {
  images: string[];
}

function PlaceGallery({ images }: PlaceGalleryProps): JSX.Element {
  const imagesShowCount = 6;
  const imagesToShow = images.slice(0, imagesShowCount);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {
          imagesToShow.map((image): JSX.Element => {
            const regex = /(?:\d+)(?!.*\d)/;
            const imageId = image.match(regex) as string[];
            const key = imageId[0];

            return (
              <div className="property__image-wrapper" key={key}>
                <img className="property__image" src={image} alt="studio" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PlaceGallery;
