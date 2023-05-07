const headers = new Headers({
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
});

const initRequest: RequestInit = {
  method: "GET",
  headers: headers,
  mode: "cors",
  cache: "default",
};

export const getPlaces = () => {
  return fetch(`https://api.comparatrip.eu/cities/popular/5`, initRequest).then(
    function (res) {
      return res.json();
    }
  );
};

export const searchPlaces = (value: string) => {
  return fetch(
    `https://api.comparatrip.eu/cities/autocomplete/?q=${value}`,
    initRequest
  ).then(function (res) {
    return res.json();
  });
};
