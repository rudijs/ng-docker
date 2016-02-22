export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

/**
 * Counter increment action
 * @return {object} Redux action type
 */
export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

/**
 * Counter decrement action
 * @return {object} Redux action type
 */
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

/**
 * Counter increment if odd action
 * @return {object} Redux action type
 */
export function incrementIfOdd() {
  return (dispatch: any, getState: any) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

/**
 * Counter async increment action
 * @return {object} Redux action type
 */
export function incrementAsync(delay = 1000) {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
