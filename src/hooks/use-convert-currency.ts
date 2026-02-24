export function useCurrency() {
  function convertCurrency(value: any) {
    const numero = Number(value);

    return `R$ ${numero.toFixed(2).replace(".", ",")}`;
  }
  return { convertCurrency };
}
