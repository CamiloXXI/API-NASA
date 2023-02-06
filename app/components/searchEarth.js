export default function searchEarth(data) {
  data.preventDefault();
  const form = data.target;
  const lonValue = form.elements.lon.value;
  const latValue = form.elements.lat.value;
  const dateValue = form.elements.date.value;
  const dimValue = form.elements.dim.value;
  return { lonValue, latValue, dateValue, dimValue };
}
