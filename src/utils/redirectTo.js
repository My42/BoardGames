const redirectTo = (path, history) => {
  if (history.location.pathname === path) return;
  history.push(path);
};

export default redirectTo;
