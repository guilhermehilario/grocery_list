export default function useSumItems() {
  function sumItems(array: any) {
    let valueInitial = 0;

    return array.reduce((accumulator: number, product: any) => {
      return accumulator + product.amount;
    }, valueInitial);
  }

  return { sumItems };
}
