import * as SecureStore from "expo-secure-store";

export async function saveSingleItemToStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function saveMultipleItemsToStorage(items: any) {
  items.map(async (item: any) => {
    await SecureStore.setItemAsync(item.key, item.value);
  });
}

export async function getFromStorage(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    console.log("No values stored under that key.");
  }
}

export async function deleteFromStorage(key: string) {
  await SecureStore.deleteItemAsync(key);
}
