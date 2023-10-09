import styled from "styled-components"
import switchStyles from "../../utils/switch-styles"
import { Color, VariantAndColorSet, StyledButtonProps } from "./types"

// 크기마다 다른 CSS를 switch를 통해서 적용하려고 정의해놓음
const sizes = {
  full: `
    width: 100%;
    padding: 14px 32px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    span {
      font-size: 24px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 24px;
      font-size: 16px;
      line-height: 20px;
    
      span {
        font-size: 20px;
      }
    }
  `,
  large: `
    padding: 14px 32px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    span {
      font-size: 24px;
    }

    @media screen and (max-width: 768px) {
      padding: 10px 24px;
      font-size: 16px;
      line-height: 20px;
    
      span {
        font-size: 20px;
      }
    }
  `,
  medium: `
    padding: 10px 24px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;

    span {
      font-size: 20px;
    }

    @media screen and (max-width: 768px) {
      padding: 8px 16px;
      font-size: 14px;
      line-height: 18px;

      span {
        font-size: 20px;
      }
    }
  `,
  small: `
    padding: 8px 16px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    span {
      font-size: 16px;
    }

    @media screen and (max-width: 768px) {
      padding: 4px 8px;
      font-size: 12px;
      line-height: 16px;

      span {
        font-size: 16px;
      }
    }
  `,
}

// fulled 스타일의 CSS들을 각각 맞춰서 적용해줌
const fulledSet = (color: Color, theme: any) => {
  let styles = `
    &:hover {
      opacity: 0.5;
    }
    &:focus {
      border: 1px solid ${theme.colors.primary.black};
    }
    &:active {
      opacity: 1;
    }
  `
  if (color === "primary") {
    styles += `
      background-color: ${theme.colors.primary.hitec1};
      border-color: ${theme.colors.primary.white};
      color: ${theme.colors.primary.white};
    `
    return styles
  }

  if (color === "secondary") {
    styles += `
      background-color: ${theme.color.secondary};
      border-color: ${theme.color.secondary};
      color: ${theme.color.white};
    `
    return styles
  }

  if (color === "black") {
    styles += `
      background-color: ${theme.color.black};
      border-color: ${theme.color.black};
      color: ${theme.color.white};
      &:focus {
        border: 1px solid ${theme.color.primary};
      }
    `
    return styles
  }

  if (color === "white") {
    styles += `
      background-color: ${theme.color.white};
      border-color: ${theme.color.white};
      color: ${theme.color.black};
    `
    return styles
  }

  return styles
}

// outline 스타일의 CSS를 각각 맞춰서 적용해줌
const outlineSet = (color: Color, theme: any) => {
  let styles = `
      &:hover {
        border: 1px solid transparent;
      }
      &:focus {
        border: 1px solid ${theme.color.black};
      }
      `
  if (color === "primary") {
    styles += `
      background-color: transparent;
      border: 1px solid ${theme.color.primary};
      color: ${theme.color.primary};
      &:hover {
        background-color: ${theme.color.primary};
        color: ${theme.color.white};
      }
    `
    return styles
  }

  if (color === "secondary") {
    styles += `
      background-color: transparent;
      border: 1px solid ${theme.color.secondary};
      color: ${theme.color.secondary};
      &:hover {
        background-color: ${theme.color.secondary};
        color: ${theme.color.white};
      }
    `
    return styles
  }

  if (color === "black") {
    styles += `
      background-color: transparent;
      border: 1px solid${theme.color.black};
      color: ${theme.color.black};
      &:hover {
        background-color: ${theme.color.black};
        color: ${theme.color.white};
      }
      &:focus {
        border: 1px solid ${theme.color.primary};
      }
    `
    return styles
  }

  if (color === "white") {
    styles += `
      background-color: transparent;
      border: 1px solid ${theme.color.white};
      color: ${theme.color.white};
      &:hover {
        background-color: ${theme.color.white};
        color: ${theme.color.black};
      }
    `
    return styles
  }

  return styles
}

// 컴포넌트의 큰축(variant)에 따라서 각각 알맞는 함수에 넣어줌
const variantAndColorSet = ({ variant, color, theme }: VariantAndColorSet) => {
  if (variant === "fulled") {
    return fulledSet(color, theme)
  }
  if (variant === "outline") {
    return outlineSet(color, theme)
  }
}

const StyledButton = styled.button<StyledButtonProps>`
  ${({ size }) => switchStyles({ styles: sizes, value: size })};
  ${({ theme, color, variant }) =>
    variantAndColorSet({ variant, color, theme })}
  box-sizing: border-box;
  transition: all 0.25s ease;
  border-radius: 4px;
  ${({ icon }) =>
    icon &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media screen and (max-width: 768px) {
      gap: 4px;
    }
  `};
  ${({ iconPosition }) =>
    iconPosition === "right" && `flex-direction: row-reverse`}
  ${({ disabled, theme }) =>
    disabled &&
    `
    &:disabled {
      background-color: ${theme.color.g200};
      color: ${theme.color.g400};
      border: 1px solid ${theme.color.g400};
    }
    &:disabled:hover {
      background-color: ${theme.color.g200};
      color: ${theme.color.g400};
      border: 1px solid ${theme.color.g400};
      opacity: 1;
    }
  `}
`

export { StyledButton }
export type { StyledButtonProps }
