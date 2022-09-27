import Storage from "@react-native-async-storage/async-storage";

const DEFAULT_MENU = ["Chouffe", "Mont blanc", "Cuvée", "Triple K"];
const LOCAL_STORAGE_KEY = "menuItems";
const TIMEOUT = 100;

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const saveLocalStorage = async (key: string, value: any) => {
  await Storage.setItem(key, JSON.stringify(value));
};
const getLocalStorage = async (key: string) => {
  const value = await Storage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const listMenuItems: () => Promise<string[]> = async () => {
  await sleep(TIMEOUT);
  const menuItems = await getLocalStorage(LOCAL_STORAGE_KEY);
  if (menuItems) {
    return menuItems;
  } else {
    await saveLocalStorage(LOCAL_STORAGE_KEY, DEFAULT_MENU);
    return [];
  }
};

export const addMenuItem: (item: string) => Promise<void> = async (
  item: string
) => {
  await sleep(TIMEOUT);
  const menuItems = await listMenuItems();
  const index = menuItems.indexOf(item);
  if (index === -1) {
    menuItems.push(item);
    await saveLocalStorage(LOCAL_STORAGE_KEY, menuItems);
  }
};

export const removeMenuItem: (item: string) => Promise<void> = async (
  item: string
) => {
  await sleep(TIMEOUT);
  const menuItems = await listMenuItems();
  const index = menuItems.indexOf(item);
  if (index > -1) {
    menuItems.splice(index, 1);
    await saveLocalStorage(LOCAL_STORAGE_KEY, menuItems);
  }
};
