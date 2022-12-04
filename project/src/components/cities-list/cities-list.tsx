import { useAppDispatch, useAppSelector } from '../../hooks/index';

import { CITIES } from '../../consts';
import { getCurrentCity } from '../../store/room-process/selectors';
import { setSelectedCity } from '../../store/room-process/room-process';

function CitiesList() {

  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();

  const selectCityHandle = (evt: React.SyntheticEvent<HTMLAnchorElement>, city: string) => {
    evt.preventDefault();
    dispatch(setSelectedCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      { CITIES.map((city) => (
        <li key={city} className="locations__item">
          <a
            className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
            href="##"
            onClick={(evt) => {selectCityHandle(evt, city);}}
          >
            <span>{city}</span>
          </a>
        </li>
      )
      )}
    </ul>
  );
}

export default CitiesList;
