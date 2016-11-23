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
