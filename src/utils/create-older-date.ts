interface CreateOlderDate {
  date: Date;
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  mins?: number;
}

const createOlderDate = ({ date, years, months, days, hours, mins }: CreateOlderDate) => {
  const olderDate = new Date(date);
  if (years) {
    olderDate.setFullYear(date.getFullYear() + years);
  }
  if (months) {
    olderDate.setMonth(date.getMonth() + months);
  }
  if (days) {
    olderDate.setDate(date.getDate() + days);
  }
  if (hours) {
    olderDate.setHours(date.getHours() + hours);
  }
  if (mins) {
    olderDate.setMinutes(date.getMinutes() + mins);
  }

  return olderDate;
};

export default createOlderDate;
