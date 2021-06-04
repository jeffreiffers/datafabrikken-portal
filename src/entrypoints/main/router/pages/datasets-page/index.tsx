import React, { FC, memo, useEffect } from 'react';
import { compose } from 'redux';
import { RouteComponentProps } from 'react-router-dom';

import withDatasets, {
  Props as DatasetsProps
} from '../../../../../components/with-datasets';
import ParallaxContainer from '../../../../../components/parallax-container';

import SC from './styled';
import SearchHit from '../../../../../components/search-hit';

interface Props extends RouteComponentProps, DatasetsProps {}

const DatasetsPage: FC<Props> = ({
  datasets,
  datasetsActions: { getDatasetsRequested: getDatasets }
}) => {
  useEffect(() => {
    getDatasets();
  }, []);

  return (
    <SC.DatasetsPage>
      <ParallaxContainer>
        <SC.Container>
          {datasets?.map(({ title, description }: any) => (
            <SearchHit title={title} description={description} />
          ))}
        </SC.Container>
      </ParallaxContainer>
    </SC.DatasetsPage>
  );
};

export default compose<FC>(memo, withDatasets)(DatasetsPage);
