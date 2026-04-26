import holdingsData from "../data/holdings.json";

export const fetchHoldings = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(holdingsData);
    }, 500);
  });
};

export const fetchCapitalGains = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        capitalGains: {
          stcg: {
            profits: 70200.88,
            losses: 1548.53,
          },
          ltcg: {
            profits: 5020,
            losses: 3050,
          },
        },
      });
    }, 500);
  });
};