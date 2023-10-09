import fillZero from './fill-zero';

type TimeFormat = (date: Date) => string;

const timeFormat: TimeFormat = date => {
  if (typeof date === 'undefined') {
    return '';
  }
  const hours = fillZero({ number: date.getHours() });
  const minutes = fillZero({ number: date.getMinutes() });
  const result = `${hours}시 ${minutes}분`;

  return result;
};

export default timeFormat;
