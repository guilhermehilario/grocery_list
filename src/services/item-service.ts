import { groceryListRepository } from "@/src/repositories/grocery-list";
import { parseCurrencyToNumber } from "@/src/utils/currency";

export function saveItem(listId: number, itemId: number | undefined, payload: any) {
  // payload.price may be masked string, parse to number
  const price = parseCurrencyToNumber(payload.price);
  const amount = payload.amount !== undefined ? Number(payload.amount) : 0;

  const itemPayload = {
    ...payload,
    price,
    amount,
  };

  if (itemId !== undefined && itemId !== 0) {
    return groceryListRepository.updateItem(listId, itemId, itemPayload);
  }

  return groceryListRepository.addItem(listId, itemPayload);
}
