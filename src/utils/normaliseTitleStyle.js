export default function normaliseTitleStyle(x) {
  if (x) {
    return x.toLowerCase().replace(/\s/g, '');
  }
  return null;
}
