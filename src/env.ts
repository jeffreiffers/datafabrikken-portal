import { validateEnv } from './utils/common';

import { Environment } from './types/enums';

export default validateEnv(
  (window as any).env ?? {
    ENV: Environment.DEVELOPMENT,
    SEARCH_FULLTEXT_HOST: 'https://search.fellesdatakatalog.digdir.no',
    REFERENCE_DATA_HOST: 'https://data.norge.no',
    FDK_PORTAL_HOST: 'https://data.norge.no'
  }
);
