export const filterOption = (
  input: string,
  option?: { label: string; value: string }
) =>
  (option?.label.toLocaleLowerCase() ?? "").includes(input.toLocaleLowerCase());

type StorageValue = string | number | boolean | object | null;

export const localStorageHelper = {
  setItem: (key: string, value: StorageValue): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },

  getItem: <T>(key: string): T | null => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    }
    return null;
  },

  removeItem: (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },

  clear: (): void => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
  },
};

export default localStorageHelper;

export const transformTextUpper = (text: string) => text.toUpperCase();

export function route(route: string, params: any = {}): string {
  let builtRoute = route;
  Object.keys(params).forEach((property) => {
    builtRoute = builtRoute.replace(`:${property}`, params[property]);
  });

  return builtRoute;
}
