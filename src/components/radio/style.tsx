import styled from 'styled-components';
import { Color, StyledRadioProps } from './types';

const colorSet = (color: Color, theme: any) => {
  if (color === 'primary') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.primary};
      }
      &:checked + span {
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.primary};

        &:before {
          background-color: ${theme.color.primary};
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
  }

  if (color === 'secondary') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.secondary};
      }
      &:checked + span {
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.secondary};

        &:before {
          background-color: ${theme.color.secondary};
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
  }

  if (color === 'black') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.black};
      }
      &:checked + span {
        background-color: ${theme.color.white};
        border: 2px solid ${theme.color.black};

        &:before {
          background-color: ${theme.color.black};
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
  }

  if (color === 'white') {
    return `
      &:focus + span {
        border: 2px solid ${theme.color.white};
      }
      &:checked + span {
        background-color: ${theme.color.black};
        border: 2px solid ${theme.color.white};

        &:before {
          background-color: ${theme.color.white};
          transform: translate(-50%, -50%) scale(1);
        }
      }
    `;
  }

  return '';
};

const StyledRadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledRadio = styled.input<StyledRadioProps>`
  position: absolute;
  box-sizing: border-box;
  background-color: red;
  width: 16px;
  height: 16px;
  opacity: 0;
  cursor: pointer;
  z-index: 1;
  ${({ color, theme }) => colorSet(color, theme)}

  &:checked:disabled + span {
    border: 2px solid ${({ theme }) => theme.color.g400};
    &:before {
      background-color: ${({ theme }) => theme.color.g400};
    }
  }
`;

const StyledFakeRadio = styled.span`
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.color.g400};
  border-radius: 50%;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.25s ease;
  }

  transition: all 0.25s ease;
`;

const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.g600};
`;

export { StyledRadio, StyledFakeRadio, StyledRadioWrapper, StyledLabel };
