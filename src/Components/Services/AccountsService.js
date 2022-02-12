import { isMock } from "../Shared/isMock";
import { getAccounts } from "../Shared/serverData";
import mockData from "../../Services/data.json";

export const dataFilter = () => {
  if (isMock()) {
    return Promise.resolve(mockData);
  } else {
    return getAccounts();
  }
};
