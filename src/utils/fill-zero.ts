interface IParameter {
  number: number;
  position?: number;
}

type FillZero = ({ number, position }: IParameter) => string;

const fillZero: FillZero = ({ number, position = 2 }: IParameter) => {
  let stringValue = String(number);
  if (stringValue.length < position) {
    for (let i = stringValue.length; i < position; i += 1) {
      stringValue = `0${stringValue}`;
    }
  }
  return stringValue;
};

export default fillZero;
