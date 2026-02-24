import { groceryListMock } from "./grocery-list.mock";

class GroceryListRepository {
  private list = groceryListMock;

  getAll() {
    return this.list;
  }

  getById(id: number) {
    return this.list.find((element) => element.id === id);
  }

  getItensById(id: number) {
    return this.list.find((element) => element.id === id)?.content;
  }
}

export const groceryListRepository = new GroceryListRepository();
