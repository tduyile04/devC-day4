const createStore = (reducer) => {
  let state;
  let listeners = [];

  getState = () => state

  dispatch(action) {
    let newState;
    newState = reducer(state, action);
    listeners.forEach(listener => listener());
    return newState;
  }

  subscribe(listener) {
    listeners.push(listener);
    return (listener) => listeners.filter(l => l !== listener);

  }


  return {
    getState,
    dispatch,
    subscribe
  }
}