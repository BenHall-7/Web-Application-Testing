import { render } from '@testing-library/react';
import App, {addBall, addFoul, addHit, addStrike} from './App';

test('renders without crashing', () => {
  render(App);
})

test('state functions work', () => {
  expect(addBall({ball: 0, strike: 1})).toEqual({ball: 1, strike: 1});
  expect(addBall({ball: 3, strike: 1})).toEqual({ball: 0, strike: 0});

  expect(addStrike({ball: 1, strike: 0})).toEqual({ball: 1, strike: 1});
  expect(addStrike({ball: 1, strike: 2})).toEqual({ball: 0, strike: 0});
  
  expect(addFoul({ball: 1, strike: 0})).toEqual({ball: 1, strike: 1});
  expect(addFoul({ball: 1, strike: 2})).toEqual({ball: 1, strike: 2});
  
  expect(addHit({ball: 2, strike: 1})).toEqual({ball: 0, strike: 0});
});