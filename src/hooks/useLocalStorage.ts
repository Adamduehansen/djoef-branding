const useLocalStorage = function () {
  const storeValue = function (key: string, value: string) {
    localStorage.setItem(key, value);
  };

  const getValue = function (key: string) {
    return localStorage.getItem(key);
  };

  return {
    storeValue,
    getValue,
  };
};

export default useLocalStorage;
