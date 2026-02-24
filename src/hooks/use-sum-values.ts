export default function useSumValues() {
  function sumValues(array: any) {
    let valueInitial = 0;

    return array.reduce((accumulator: number, product: any) => {
      return accumulator + product.price;
    }, valueInitial);
  }
  return { sumValues };
}
