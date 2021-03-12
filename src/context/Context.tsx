import { createContext, useState } from 'react';
import { getRepositories } from '../graphql/__generated__/getRepositories';

const filterList = [
  'scss',
  'typescript',
  'react',
  'styled-components',
  'react-context',
  'react-router',
  'redux',
  'redux-thunk',
  'api',
  'apollo-client',
  'graphql',
  'gatsby',
  'leaflet-map',
];

type ContextProps = {
  filters: {
    name: string;
    active: boolean;
  }[];
  addFilter: (filter: string) => void;
  filtredData: (queryData: getRepositories | undefined) => any;
};

const Context = createContext<Partial<ContextProps>>({});

type ProviderProps = {
  children: React.ReactNode;
};

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState(
    filterList.map(filter => ({ name: filter, active: false }))
  );

  const addFilter = (filter: string) =>
    setFilters(prevState =>
      prevState.map(item =>
        item.name === filter ? { ...item, active: !item.active } : item
      )
    );

  const filtredData = (queryData: getRepositories | undefined) => {
    const onlyPortfolioData = queryData?.user?.repositories.nodes!.filter(
      repo =>
        repo?.repositoryTopics.nodes
          ?.map(topic => topic?.topic.name)
          .includes('portfolio')
    );

    const activeFilters = filters.filter(({ active }) => active);

    const data = onlyPortfolioData?.filter(repo =>
      activeFilters.every(filter =>
        repo?.repositoryTopics.nodes
          ?.map(item => item?.topic.name)
          .includes(filter.name)
      )
    );
    return data;
  };

  const contextValue = {
    filters,
    addFilter,
    filtredData,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Context;
