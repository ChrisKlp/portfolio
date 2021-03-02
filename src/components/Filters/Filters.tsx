import Button from '../Button/Button';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import MobileFilters from './MobileFilters';
import media from '../../global/mediaQueries';
import FilterList from './FilterList';

const Wrapper = styled.section`
  margin-bottom: 5rem;

  @media (${media.lg}) {
    margin-bottom: 6rem;
  }
`;

const FilterButton = styled(Button)`
  margin: 0 auto;

  @media (${media.md}) {
    display: none;
  }
`;

const StyledFilterList = styled(FilterList)`
  display: none;

  @media (${media.md}) {
    display: flex;
  }
`;

const Title = styled.h5`
  margin-bottom: 1.5rem;
  font-size: 1.6rem;
  line-height: 125%;
  color: ${({ theme }) => theme.secondary};
  display: none;

  @media (${media.md}) {
    display: block;
  }
`;

type FiltersProps = {};

const Filters: React.FC<FiltersProps> = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(prev => !prev);
  };

  useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal]);

  if (modal) {
    return (
      <Modal>
        <MobileFilters handleModal={handleModal} />
      </Modal>
    );
  }

  return (
    <Wrapper>
      <FilterButton filter={+true} onClick={handleModal}>
        Filter by
      </FilterButton>
      <Title>Filter by:</Title>
      <StyledFilterList />
    </Wrapper>
  );
};

export default Filters;
