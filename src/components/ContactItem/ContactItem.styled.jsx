import styled from 'styled-components';
import { ReactComponent as defaultAvatar } from '../../images/avatar-def.svg';
import { ReactComponent as trash } from '../../images/trash.svg';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
`;

export const Avatar = styled(defaultAvatar)`
  width: 40;
  height: 40;
`;

export const Contact = styled.div`
  flex-grow: 1;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Phone = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const IconTrash = styled(trash)`
  width: 20px;
  height: 20px;
`;

export const TrashButton = styled(AvatarWrapper).attrs(() => ({
  as: 'button',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #7d81ff;
  transition: box-shadow 250ms ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.shadowButton};
  }
`;
