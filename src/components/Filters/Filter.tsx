import { useContext } from 'react';
import styled, { css } from 'styled-components';
import Context from '../../context/Context';
import media from '../../global/mediaQueries';

const Wrapper = styled.button<{ active: boolean }>`
  padding: 0.9rem 1.8rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-align: center;
  color: ${({ theme }) => theme.tag};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.tag};
  border-radius: 3em;
  cursor: pointer;
  transition: color 0.2s, border 0.2s, background-color 0.2s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.secondary};
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.primary};
      border: 1px solid ${({ theme }) => theme.primary};
      background-color: hsla(38, 100%, 68%, 0.1);

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.primary};
        border: 1px solid ${({ theme }) => theme.primary};
        background-color: hsla(38, 100%, 68%, 0.2);
      }
    `};

  @media (${media.md}) {
    padding: 0.5rem 1.4rem;
  }
`;

type FilterProps = {
  name: string;
  active: boolean;
};

const Filter: React.FC<FilterProps> = ({ name, active }) => {
  const { addFilter } = useContext(Context);

  const handleClick = () => {
    addFilter!(name);
  };

  return (
    <Wrapper active={active} onClick={handleClick}>
      {name}
    </Wrapper>
  );
};

export default Filter;
