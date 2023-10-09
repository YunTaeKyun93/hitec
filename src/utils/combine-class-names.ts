const combineClassNames = (...names: (string | undefined)[]): string => {
  let result = '';

  // eslint-disable-next-line guard-for-in
  for (const i in names) {
    const name = names[i];

    if (result.length === 0 && name !== undefined) {
      result = name;
    }

    if (name !== undefined && result.length !== 0) {
      result = `${result} ${name}`;
    }
  }

  return result;
};

export default combineClassNames;
