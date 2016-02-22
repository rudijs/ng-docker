export default function counter(state: number = 0, action: any = {type: 'null'}): any {
  if (ON_TEST) {
    require('./counter_spec');
  }

  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;

    case 'DECREMENT_COUNTER':
      return state - 1;

    default:
      return state;
  }
}
