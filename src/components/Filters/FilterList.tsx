import { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import media from '../../global/mediaQueries';
import Filter from './Filter';

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (${media.md}) {
    gap: 1rem;
  }
`;

type FilterListProps = {
  className?: string;
};

const FilterList: React.FC<FilterListProps> = ({ className }) => {
  const { filters } = useContext(Context);

  return (
    <Wrapper className={className}>
      {filters?.map(item => (
        <li key={item.name}>
          <Filter name={item.name} active={item.active} />
        </li>
      ))}
    </Wrapper>
  );
};

export default FilterList;
