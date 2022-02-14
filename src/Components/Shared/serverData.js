export const getAccountsFromAPI = () => {
  return fetch(
    "https://mockend.com/rawmediamarketing/vue-assignment-api/accounts"
  ).then((response) => response.json());
};
