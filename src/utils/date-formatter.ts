import fillZero from './fill-zero';

interface IParameters {
  // Mui DateCalendar onChange 타입이 Date | null이기 때문에 null 허용
  date: Date | null | undefined;
  str?: string;
  isTime?: boolean;
}

type DateFormatter = ({ date, str, isTime }: IParameters) => string;

const dateFormatter: DateFormatter = ({ date, str = '.', isTime }: IParameters) => {
  if (date == null) {
    return '';
  }
  const year = date.getFullYear();
  const month = fillZero({ number: date.getMonth() + 1 });
  const day = fillZero({ number: date.getDate() });

  let result = `${year}${str}${month}${str}${day}`;

  if (isTime) {
    // result = result +
    const hours = fillZero({ number: date.getHours() });
    const minutes = fillZero({ number: date.getMinutes() });
    const second = fillZero({ number: date.getSeconds() });
    // result = `${result} (${hours}:${minutes}:${second})`;
    result = `${result} ${hours}시 ${minutes}분`;
  }

  return result;
};

// Mui DateCalendar onChange 타입이 Date | null이기 때문에 null 허용
const dateFormatterForKr = (date: Date | null | undefined) => {
  if (date == null) {
    return '';
  }

  const year = date.getFullYear();
  const month = fillZero({ number: date.getMonth() + 1 });
  const day = fillZero({ number: date.getDate() });

  return `${year}년 ${month}월 ${day}일`;
};

const timeFormatterForKr = (strTime: string | undefined | null) => {
  if (strTime == null) {
    return '';
  }
  let result = strTime;
  result = result.replace(':', '시 ');
  return `${result}분`;
};

export { dateFormatterForKr, timeFormatterForKr };
export default dateFormatter;
