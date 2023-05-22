import styled from 'styled-components';
import { InputContact } from '../ContactForm/ContactForm.styled';

export const InputFilter = styled(InputContact)`
  border-radius: 8px 0 0 8px;
  border-right: none;

  &:focus,
  &:not(:placeholder-shown) {
    box-shadow: none;
  }

  &:not(:placeholder-shown) ~ button > span {
    cursor: pointer;
    visibility: visible;
    opacity: 1;
    transition: opacity 250ms linear;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
`;

export const ButtonFilter = styled.button`
  cursor: text;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-left: none;
  border-radius: 0 8px 8px 0;
  background-color: ${({ theme }) => theme.colors.bgItems};
`;

export const Cross = styled.span`
  position: relative;
  display: block;
  visibility: hidden;
  opacity: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.borderColor};

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 49%;
    left: 5px;
    display: block;
    width: 10px;
    height: 2px;
    border-radius: 2px;
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.bgItems};
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
