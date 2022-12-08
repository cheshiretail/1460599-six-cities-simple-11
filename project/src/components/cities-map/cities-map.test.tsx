import CitiesMap from './cities-map';
import { render, screen } from '@testing-library/react';
import { mocks } from '../../mocks/offer';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { Provider } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { createMemoryHistory } from 'history';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  DATA: {
    rooms: mocks,
    currentRoom: {
      room: mocks[0],
      nearby: [],
      comments: [],
    },
    isRoomsLoading: false,
    isRoomByIdLoading: false,
    isFormLoading: false,
    errorFromServer: null,
  },
  ROOM: {
    currentCity: 'Paris',
    currentSortOption: 'Popular',
    activeRoomId: null,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <CitiesMap currentCityRooms={[mocks[0], mocks[1]]} />
    </HistoryRouter>
  </Provider>
);

describe('Cities Map component', () => {

  it('should render "CitiesMap" component', () => {
    render(fakeApp);

    expect(screen.getByTestId('cities-map-element')).toBeInTheDocument();
  });

});
