import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const InputContact = styled.input`
  width: 100%;
  height: 30px;
  padding: 4px 12px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgItems};
  outline: none;
  transition: box-shadow 250ms linear;

  &:focus,
  &:not(:placeholder-shown) {
    box-shadow: ${({ theme }) => theme.shadow.shadowButton};
  }
`;

export const Button = styled.button`
  height: 30px;
  padding: 4px 12px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.bgItems};
  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.shadowButton};
  }
`;
