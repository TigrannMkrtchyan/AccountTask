import { isMock } from "../Shared/isMock";
import { getAccountsFromAPI } from "../Shared/serverData";
import accountsMock from "../../Services/data.json";

export const getAccounts = () =>
  isMock() ? Promise.resolve(accountsMock) : getAccountsFromAPI();
