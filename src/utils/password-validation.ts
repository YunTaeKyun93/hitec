/* eslint-disable no-useless-escape */

const passwordValidation = (password: string) => {
  const numberRegex = /[0-9]/g;
  const stringRegex = /[a-z]/gi;
  const specialSymbolRegex = /[\{\}\[\]<>\/?.,;:'"|`~!@#$%^&*()\-_+=\\]/g;

  // 최소 최대 길이
  if (password.length < 6 || password.length > 512) {
    return false;
  }

  // 숫자가 있는지 체크
  if (!numberRegex.test(password)) {
    return false;
  }

  // 문자가 있는지 체크(비밀번호니까 한글 체크는 없음)
  if (!stringRegex.test(password)) {
    return false;
  }

  // 특수기호 있는지 체크
  if (!specialSymbolRegex.test(password)) {
    return false;
  }

  return true;
};

export default passwordValidation;
