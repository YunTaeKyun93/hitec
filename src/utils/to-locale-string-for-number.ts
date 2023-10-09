const toLocaleStringForNumber = (targetNumber: string | number) => {
  if (typeof targetNumber === 'number') {
    return targetNumber.toLocaleString();
  }

  const parseToTarget = parseInt(targetNumber, 10);
  return parseToTarget.toLocaleString();
};

export default toLocaleStringForNumber;
