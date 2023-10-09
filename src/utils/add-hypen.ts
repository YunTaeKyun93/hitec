const toHypenPhone = (phone: string) => {
  let str = phone.replace(/[^0-9]/g, '');
  if (str.length > 7) str = `${str.slice(0, 3)}-${str.slice(3, 7)}-${str.slice(7, 11)}`;
  else if (str.length > 3) str = `${str.slice(0, 3)}-${str.slice(3)}`;
  return str;
};

export default toHypenPhone;
