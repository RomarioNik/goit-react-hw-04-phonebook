import styled from 'styled-components';

export const Container = styled.div`
  max-width: 475px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 15px;
`;

export const PhoneBook = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.bgComponent};
  box-shadow: ${({ theme }) => theme.shadow.shadowComponent};
`;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const TitlePrime = styled.h1`
  color: ${({ theme }) => theme.colors.mainText};
`;

export const TitleSecond = styled.h2`
  color: ${({ theme }) => theme.colors.mainText};
`;
