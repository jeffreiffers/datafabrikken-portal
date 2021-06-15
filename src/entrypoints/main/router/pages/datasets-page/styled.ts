import styled, { css } from 'styled-components';

import { Colour, theme } from '../../../app/theme';

const onMobileView = '@media (max-width: 900px)';

const DatasetsPage = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-top: ${theme.spacing('S50')};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1140px;
  z-index: 10;

  @media (max-width: 1204px) {
    & {
      width: 100%;
    }
  }

  ${onMobileView} {
    & {
      padding: 0 1em;
    }
  }
`;

type rowProps = {
  reverse?: boolean;
};

const Row = styled.div<rowProps>`
  display: flex;
  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}
  ${onMobileView} {
    & {
      flex-direction: column;
    }
  }
`;

const Aside = styled.aside`
  flex: 0 0 20%;
  padding: 0 ${theme.spacing('S10')};
  ${onMobileView} {
    & {
      flex: 1;
    }
  }
`;

const Title = styled.h1`
  font-size: ${theme.fontSize('FS24')};
  font-weight: ${theme.fontWeight('FW300')};
  margin-bottom: ${theme.spacing('S20')};
  text-align: center;
`;

const SearchList = styled.section`
  padding: 0 ${theme.spacing('S10')};
`;

const SearchContainer = styled.div`
  flex: 0 0 80%;
  margin-bottom: ${theme.spacing('S32')};
  padding: 0 ${theme.spacing('S10')};
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & > .pagination {
    align-items: center;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;

    & > li > * {
      display: flex;
      padding: 0.5em 1em;
    }
    & > li.active > a {
      background-color: ${theme.colour(Colour.BLUE, 'B36')};
    }
  }
`;

export default {
  DatasetsPage,
  Container,
  Row,
  Aside,
  Title,
  SearchList,
  SearchContainer,
  Pagination
};
