import styled from 'styled-components';

const onMobileView = '@media (max-width: 900px)';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 3em 0;
  margin-top: auto;
  & > span {
    text-align: center;
  }
  ${onMobileView} {
    & {
      margin-left: calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
      margin-right: calc(12px + (32 - 12) * ((100vw - 320px) / (900 - 320)));
    }
  }
`;

export default { Footer };
