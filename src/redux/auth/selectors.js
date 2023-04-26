export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuth = state => {
  const isLoggedIn = selectIsLoggedIn(state);
  const isRefreshing = selectIsRefreshing(state);
  const user = selectUser(state);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

// також це можна записати окремим хуком:
// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/auth/selectors';

// export const useAuth = () => {
//   return {
//     isLoggedIn: useSelector(selectIsLoggedIn),
//     isRefreshing: useSelector(selectIsRefreshing),
//     user: useSelector(selectUser),
//   };
// };
// використання:  const { isLoggedIn } = useAuth();
// бере три селектора і повертає їх у вигляді одного об'єкту
