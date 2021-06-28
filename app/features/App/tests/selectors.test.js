import { selectLocation } from 'features/App/selectors';

describe('selectLocation', () => {
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(selectLocation(mockedState)).toEqual(router.location);
  });
});
