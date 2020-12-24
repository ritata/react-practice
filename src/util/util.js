export function convertToDate(props) {
  const date = new Date(props).toLocaleDateString();
  return date;
}
