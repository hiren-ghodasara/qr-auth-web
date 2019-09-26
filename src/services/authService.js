import configureStore from "../store/configureStore";

const store = configureStore();

const authService = {
  isAuthenticated() {
    let userInfo = store.getState() && store.getState().user && store.getState().user.isAuthenticated;
    return userInfo;
  }
};

export default authService;
