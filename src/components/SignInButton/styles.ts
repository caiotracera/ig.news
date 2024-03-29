import styled from 'styled-components';

export const Container = styled.button`
  height: 3rem;

  border: 0;
  border-radius: 3rem;

  background: var(--gray-850);
  color: var(--white);
  font-weight: bold;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    width: 20px;
    height: 20px;

    &:first-child {
      margin-right: 1rem;
    }

    &.closeIcon {
      margin-left: 1rem;
    }
  }
`;
