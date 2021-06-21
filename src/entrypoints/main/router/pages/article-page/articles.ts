import { PATHNAME } from '../../../../../enums';

export const articleIds: { [pathname: string]: { [key: string]: string } } = {
  [PATHNAME.ABOUT]: {
    nb: '89320f29-7e15-46d7-a05e-75975adc7a13'
  },
  [PATHNAME.DATA_COMMUNITY]: {
    nb: '54fabd83-4318-4f56-bc68-3e3d066e38dc'
  },
  [`${PATHNAME.FIND_DATA}${PATHNAME.DATA_SOURCES}`]: {
    nb: 'e15dd9b8-4bde-49d8-90a1-2a2ca372e37b'
  }
};
