import type { Environment } from './enums';

export interface EnvironmentVariables {
  ENV: Environment;
  SEARCH_FULLTEXT_HOST: string;
  REFERENCE_DATA_HOST: string;
}
