interface SwitchStyles {
  styles: any;
  value: string;
}
const switchStyles = ({ styles, value }: SwitchStyles) => {
  let result = '';
  switch (value) {
    case value:
      result = styles[value];
      break;

    default:
      break;
  }

  return result;
};

export type { SwitchStyles };
export default switchStyles;
