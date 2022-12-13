import { useAppSelector, useAppDispatch } from '../../hooks/store';
import { useEffect, useState } from 'react';
import { setSortType } from '../../store/places-process/places-process';
import { getPlacesSortType } from '../../store/places-process/selectors';

import { placesSortTypes } from '../../consts';

function PlacesSortTab(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const sortType = useAppSelector(getPlacesSortType);
  const dispatch = useAppDispatch();

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleMenuItemClick(type: string) {
    dispatch(setSortType(type));
    handleMenuClick();
  }

  const handleDocumentClick = (evt: MouseEvent) => {
    const target = evt.target as HTMLElement;

    if (isOpen && (!target.closest('.places__options') && !target.closest('.places__sorting-type'))) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => document.removeEventListener('click', handleDocumentClick);
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span style={{ userSelect: 'none' }} onClick={handleMenuClick} className="places__sorting-type" tabIndex={0}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {placesSortTypes.map((type) => (
          <li
            onClick={() => handleMenuItemClick(type)}
            key={type}
            className={`places__option ${type === sortType ? 'places__option--active' : ''}`}
            style={{ pointerEvents: `${type === sortType ? 'none' : 'auto'}` }}
            tabIndex={0}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSortTab;
