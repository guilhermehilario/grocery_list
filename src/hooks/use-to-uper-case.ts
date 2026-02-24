export function useToUperCase() {
  function toUperCase(text: string) {
    return text[0].toUpperCase() + text.substring(1);
  }
  return { toUperCase };
}
