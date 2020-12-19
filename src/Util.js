export default function ConvertToDate(props) {
  const date = new Date(props.time).toLocaleDateString();
  return date;
}
