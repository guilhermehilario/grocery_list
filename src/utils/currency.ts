export function maskCurrencyFromDigits(input: string) {
  // Accept raw input (may contain digits, dots, commas, currency symbols)
  if (!input) return "";
  const onlyDigits = String(input).replace(/\D/g, "");
  if (!onlyDigits) return "";

  // cents are last two digits
  const cents = onlyDigits.slice(-2).padStart(2, "0");
  let intPart = onlyDigits.slice(0, -2);
  if (intPart === "") intPart = "0";
  // remove leading zeros
  intPart = intPart.replace(/^0+(?=\d)/, "") || "0";

  // add thousands separator '.'
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${grouped},${cents}`;
}

export function parseCurrencyToNumber(masked: string) {
  if (!masked) return 0;
  const digits = String(masked).replace(/\D/g, "");
  if (!digits) return 0;
  const n = parseInt(digits, 10);
  return n / 100;
}

export function formatNumberToCurrency(value: number) {
  if (value === undefined || value === null) return "";
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(Number(value) || 0);
  const cents = Math.round((abs - Math.floor(abs)) * 100)
    .toString()
    .padStart(2, "0");
  const intPart = Math.floor(abs).toString();
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}R$ ${grouped},${cents}`;
}
