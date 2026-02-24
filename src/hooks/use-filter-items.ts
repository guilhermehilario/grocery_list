export default function useFilterItems() {
  function filterItems(array: any, id: number) {
    return array.filter((item: any) => item.id === id);
  }
  return { filterItems };
}
