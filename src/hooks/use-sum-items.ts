function useSumItems() {
  function sumItems(array: any) {
    let valueInitial = 0;

    // return array.reduce((accumulator: number, product: any) => {
    //   return accumulator + product.amount;
    // }, valueInitial);

    return array.length;
  }

  return { sumItems };
}

function useSumConludedItems() {
  function sumConcludedItems(array: any) {
    let valueInitial = 0;

    // return array.reduce((accumulator: number, product: any) => {
    //   if (product.status === "completed") {
    //     return accumulator + product.amount;
    //   }
    //   return accumulator;
    // }, valueInitial);

    return array.filter((item: any) => item.status === "completed").length;
  }

  return { sumConcludedItems };
}

export { useSumConludedItems, useSumItems };
