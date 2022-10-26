type PlaceGaleryProps = {
  images: string[];
}

function PlaceGalery({ images }: PlaceGaleryProps): JSX.Element {
  let id = 1;
  const cuttedImages = images.slice(0, 6);

  return (
    <div className="property__gallery">
      {
        cuttedImages.map((image): JSX.Element => (
          <div className="property__image-wrapper" key={id++}>
            <img className="property__image" src={image} alt="studio" />
          </div>
        ))
      }
    </div>
  );
}

export default PlaceGalery;
