import { SIGNUP, LOGIN } from '../constants/actionTypes';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  currentUser: null,
  loginError: null  // Add a login error state
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return {
        ...state,
        users: updatedUsers
      };
    case LOGIN:
      const { username, password } = action.payload;
      const userFound = state.users.find(user => user.username === username && user.password === password);

      if (userFound) {
        return {
          ...state,
          currentUser: userFound,
          loginError: null  // Reset login error on successful login
        };
      } else {
        console.error('Login failed: Invalid credentials');
        return {
          ...state,
          currentUser: null,
          loginError: 'Invalid credentials. Please try again.' // Set login error
        };
      }
    default:
      return state;
  }
};

export default authReducer;
