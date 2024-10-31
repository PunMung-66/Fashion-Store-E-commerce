const formatTitle = (str) => {
  str = str.replace(/-/g, " ");
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export { formatTitle };
