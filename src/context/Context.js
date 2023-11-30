import { createContext } from "react";

export const Context = createContext({
  showMoreQuotes: false,
  showMoreQuotesHandler: () => {},
});
