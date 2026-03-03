import { groceryListMock } from "./grocery-list.mock";

class GroceryListRepository {
  private list = groceryListMock;

  getAll() {
    return this.list;
  }

  getById(id: number) {
    return this.list.find((element) => element.id === id);
  }

  getCountConclued(id: number) {
    const list = this.getById(id);

    if (list && list.content) {
      return (
        list.content?.filter((item: any) => item.status === "completed")
          .length || 0
      );
    }
  }

  getSumValueItens(id: number) {
    const list = this.getById(id);
    let valueInitial = 0;

    if (list && list.content) {
      return list.content.reduce((accumulator: number, product: any) => {
        return accumulator + product.price;
      }, valueInitial);
    }
  }

  getAmmountItens(id: number) {
    const list = this.getById(id);

    if (list && list.content) {
    }
    return list?.content.length || 0;
  }

  getItensById(id: number) {
    return this.list.find((element) => element.id === id)?.content;
  }

  addItem(listId: number, item: any) {
    const list = this.list.find((element) => element.id === listId);
    if (!list) return;

    const content = list.content || [];
    // gerar id incremental baseado no maior id atual
    const maxId = content.reduce((acc: number, cur: any) => {
      return cur.id > acc ? cur.id : acc;
    }, 0);

    const newItem = { ...item, id: maxId + 1 };
    content.push(newItem);
    list.content = content;
    // atualizar contador de itens e valor total (opcional)
    list.itens = content.length;
    list.value = content.reduce(
      (acc: number, cur: any) =>
        acc + (Number(cur.price) || 0) * (Number(cur.amount) || 1),
      0,
    );
    return newItem;
  }

  updateItem(listId: number, itemId: number, updated: any) {
    const list = this.list.find((element) => element.id === listId);
    if (!list || !list.content) return;

    const idx = list.content.findIndex((it: any) => it.id === itemId);
    if (idx === -1) return;

    // manter id e sobrescrever demais campos
    list.content[idx] = { ...list.content[idx], ...updated, id: itemId };
    // recalcular métricas
    list.itens = list.content.length;
    list.value = list.content.reduce(
      (acc: number, cur: any) =>
        acc + (Number(cur.price) || 0) * (Number(cur.amount) || 1),
      0,
    );
    return list.content[idx];
  }
}

export const groceryListRepository = new GroceryListRepository();
