export const saveDataToLocalStorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  console.log('LocalStorage: ', data);
  return data ? JSON.parse(data) : null;
};
