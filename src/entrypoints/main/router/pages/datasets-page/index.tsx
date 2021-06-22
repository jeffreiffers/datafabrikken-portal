import React, { FC, FormEvent, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';

import SC from './styled';
import Root from '../../../../../components/root';
import SearchHit from '../../../../../components/search-hit';
import SearchBar from '../../../../../components/search-bar';
import {
  getParameter,
  setParameter
} from '../../../../../utils/location-helper';

interface Props extends RouteComponentProps, DatasetsProps {}

const DatasetsPage: FC<Props> = ({
  datasets,
  totalDatasets,
  datasetPageSize,
  datasetsPage,
  datasetsActions: { getPagedDatasetsRequested: getPagedDatasets }
}) => {
  const { search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    const pageParameter = getParameter('page');
    const queryParameter = getParameter('q');
    getPagedDatasets({ page: parseInt(pageParameter, 10), q: queryParameter });
  }, [search]);

  const searchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParameter(history, {
      q: e.currentTarget.searchBox.value || null,
      page: null
    });
  };

  const onPageChange = ({ selected }: any) => {
    setParameter(history, { page: selected });
    window.scroll(0, 0);
  };

  return (
    <Root>
      <SC.Container>
        <SC.Title>Finn offentlige data</SC.Title>
        <SC.Row reverse>
          <SC.SearchContainer>
            <SearchBar placeholder='Søk her' onSubmit={searchSubmit} />
          </SC.SearchContainer>
        </SC.Row>
        <SC.Row>
          <SC.Aside />
          <SC.SearchList>
            {datasets?.map(
              ({
                id,
                publisher,
                title,
                description,
                distribution,
                accessRights
              }: any) => (
                <SearchHit
                  key={id}
                  id={id}
                  publisher={publisher}
                  title={title}
                  description={description}
                  distributions={distribution}
                  accessRight={accessRights}
                />
              )
            )}
            {datasets?.length > 0 && (
              <SC.Pagination>
                <ReactPaginate
                  pageCount={totalDatasets / datasetPageSize}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  previousLabel='forrige'
                  nextLabel='neste'
                  breakLabel={<span>...</span>}
                  breakClassName='break-me'
                  containerClassName='pagination'
                  onPageChange={onPageChange}
                  activeClassName='active'
                  forcePage={datasetsPage}
                  disableInitialCallback
                />
              </SC.Pagination>
            )}
          </SC.SearchList>
        </SC.Row>
      </SC.Container>
    </Root>
  );
};

export default compose<FC>(memo, withDatasets)(DatasetsPage);
