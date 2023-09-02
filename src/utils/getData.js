const API = "https://rickandmortyapi.com/api/character";

export const getData = async (id) => {
  if (id) {
    const apiURL = `${API}/${id}`;
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("fetch error : " + error);
    }
  } else {
    try {
      const res = await fetch(API);
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("fetch error : " + error);
    }
  }
};
