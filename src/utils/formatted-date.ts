export function formattedDate(value: string) {
  const digit = value.replace(/\D/g, '');

  if (digit.length <= 4) return digit;
  if (digit.length <= 6) return `${digit.slice(0, 4)}-${digit.slice(4)}`;
  return `${digit.slice(0, 4)}-${digit.slice(4, 6)}-${digit.slice(6, 8)}`;
}
