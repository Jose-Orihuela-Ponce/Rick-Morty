export const getHash = () => {
  if (!location.hash) {
    return "/";
  }
  return location.hash.split("/")[1];
};
