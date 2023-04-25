export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
// export const selectUserName = state => state.auth.user.name;

export const selectAuth = state => {
  const isLoggedIn = selectIsLoggedIn(state);
  //   const isRefreshing = useSelector(selectIsRefreshing);
  const user = selectUser(state);

  return {
    isLoggedIn,
    // isRefreshing,
    user,
  };
};
