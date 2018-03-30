import mockData from "./mockData";

let exchangeIds = 100;

const mockAxios = {
  get(url) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ data: mockData[url] });
      }, 300);
    });
  },

  post(url, data) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: {
            ...data,
            id: exchangeIds++,
            title: `Exchanged from ${data.fromCurrency}`,
            date: new Date().toISOString()
          }
        });
      }, 300);
    });
  }
};

export default mockAxios;
