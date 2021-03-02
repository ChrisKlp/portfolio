import styled from 'styled-components';

const CardTag = styled.button`
  display: block;
  padding: 0.4rem 1rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};
  border: 0;
  border-radius: 3em;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: ${({ theme }) => theme.tagCardHover};
  }
`;

export default CardTag;
