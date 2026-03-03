export default function toUpperCaseFirstLetter(text?: string) {
  // defensive: accept undefined/null and empty strings
  const s = text ?? "";
  if (s.length === 0) return "";
  return s.charAt(0).toUpperCase() + s.substring(1);
}
