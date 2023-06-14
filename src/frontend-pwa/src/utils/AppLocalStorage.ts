/**
 * @summary Saves data to localStorage
 * @param key is the name that the data will be stored by in localStorage
 * @param data is the data to be stored
 * @type {( key: string, data: any)}
 * @author Dallas Richmond
 */
export const saveDataToLocalStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

/**
 * @summary Retrieves data from localStorage if the key exists
 * @param key is the key name used to store the value in localStorage
 * @type {( key: string )}
 * @returns the parsed JSON data or null if the key does not exist in localStorage
 * @author Dallas Richmond
 */
export const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

/**
 * @summary Checks to see if the key exists in localstorage
 * @param key is the key name used to store the value in localStorage
 * @type {( key: string )}
 * @returns boolean values
 * @author Dallas Richmond
 */
export const localStorageKeyExists = (key: string) => getDataFromLocalStorage(key) !== null;
