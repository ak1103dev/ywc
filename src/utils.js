import chunk from 'lodash/chunk';

export function getDates(dateObj) {
  const length = dateObj.daysInMonth();
  const dayOfFirst = dateObj.date(1).format('d');
  const dateInMonth = chunk([
    ...Array.from({ length: dayOfFirst }, (v, k) => ''),
    ...Array.from({ length }, (v, k) => (k+1).toString()),
    ...Array.from({ length: (42 - length - dayOfFirst) }, (v, k) => '')
  ], 7);
  return dateInMonth;
}

export function getPoint(dateObj) {
  const date = dateObj.format('D');
  const dates = getDates(dateObj);
  const dateList = dates.map((d) => d.indexOf(date));
  const y = dateList.filter((v) => v !== -1)[0];
  const x = dateList.indexOf(y);
  console.log(date);
  return { x, y };
}
