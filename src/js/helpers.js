export const getJSON = function (url, query, errorMsg = "No results") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`No results for '${query}'`);
    return response.json();
  });
};
