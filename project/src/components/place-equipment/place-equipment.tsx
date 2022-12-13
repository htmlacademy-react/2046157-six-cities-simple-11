type PlaceEquipmentProps = {
  goods: string[];
}

function PlaceEquipment({ goods }: PlaceEquipmentProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((stuff): JSX.Element => <li className="property__inside-item" key={stuff}>{stuff}</li>)}
      </ul>
    </div>
  );
}

export default PlaceEquipment;
