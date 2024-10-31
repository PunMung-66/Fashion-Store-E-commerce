const formatTitle = (str) => {
  str = str.replace(/-/g, " ");
  str = str.replace(/&/g, " | ");
  if (str.includes(",")) {
    let arr = str.split(" ");
    let product = arr[2];
    let collection = "";
    if (str.includes("|")) {
      arr = str.split("|");
      collection = arr[1];
    }
    str = `${product}${collection ? ` | ${collection}` : ""}`;
  }

  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export { formatTitle };
