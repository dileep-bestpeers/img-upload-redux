import { createStore } from "redux";

import rootReducer from "./reducers";

// const prestate = loadState();

function saveToLocalStorage(data) {
  let dataFromForm = data;
  let localStorageDATA = JSON.parse(localStorage.getItem("SOCIAL"));
  if (localStorageDATA) {
    console.log("inside local working directory");
    localStorageDATA.push(dataFromForm);
    console.log(localStorageDATA);
    localStorage.setItem("SOCIAL", JSON.stringify(localStorageDATA));
  } else {
    localStorage.setItem("SOCIAL", JSON.stringify([dataFromForm]));
  }
}

function loadFromLocalStorage(data) {
  try {
    const localStorageDATA = localStorage.getItem("SOCIAL");
    if (localStorageDATA === null) return [];
    return JSON.parse(localStorageDATA);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
