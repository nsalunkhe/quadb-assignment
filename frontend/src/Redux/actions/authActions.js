import { SIGNUP, LOGIN } from '../constants/actionTypes';

const simulateAsyncCall = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(user);
    }, 1000); 
  });
};

export const signup = (user) => {
  return async (dispatch) => {
    try {
      const response = await simulateAsyncCall(user);

      dispatch({
        type: SIGNUP,
        payload: response
      });

      const updatedUsers = JSON.parse(localStorage.getItem('users')) || [];
      localStorage.setItem('users', JSON.stringify([...updatedUsers, response]));

      dispatch(login(response));
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };
};

export const login = (user) => {
  return {
    type: LOGIN,
    payload: user
  };
};
