import { AccessRight as AccessRightEnum } from './enums';

export interface TextLanguage {
  nb: string;
  nn: string;
  en: string;
  no: string;
}

export interface Publisher {
  uri: string;
  id: string;
  name: string;
  orgPath: string;
  organizationId: string;
  prefLabel: Partial<TextLanguage>;
}

export interface LosTheme {
  uri: string;
  name: Partial<TextLanguage>;
  losPaths?: string[];
}

export interface EuTheme {
  id: string;
  title: Partial<TextLanguage>;
  code?: string;
}

interface License {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface ConformsTo {
  uri: string;
  prefLabel?: Partial<TextLanguage>;
}

interface Page {
  uri: string;
}

interface EndpointDescription {
  uri: string;
}

export interface AccessService {
  description: Partial<TextLanguage>;
  endpointDescription: EndpointDescription[];
  uri: string;
}

export interface Distribution {
  uri: string;
  type: string;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  format: string[];
  license: License[];
  openLicense: boolean;
  accessURL: string[];
  downloadURL: string[];
  conformsTo: ConformsTo[];
  page?: Page[];
  accessService?: AccessService[];
}

interface AccessRight {
  code: AccessRightEnum;
}

export interface Dataset {
  id: string;
  type: EntityEnum.DATASET;
  uri: string;
  publisher: Partial<Publisher>;
  title: Partial<TextLanguage>;
  description: Partial<TextLanguage>;
  descriptionFormatted: Partial<TextLanguage>;
  objective: Partial<TextLanguage>;
  keyword: Partial<TextLanguage>[];
  theme?: EuTheme[];
  losTheme?: LosTheme[];
  issued: string;
  modified: string;
  distribution: Distribution[];
  accessRights?: AccessRight;
}

interface ReferenceType {
  uri: string;
  code: string;
  prefLabel: Partial<TextLanguage>;
}

export interface MediaType {
  uri: string;
  code: string;
  name: string;
  prefLabel?: Partial<TextLanguage>;
}

export interface ReferenceData {
  los?: LosTheme[];
  themes?: EuTheme[];
  referencetypes?: ReferenceType[];
  mediatypes?: MediaType[];
  linguisticsystem?: ReferenceType[];
  apiservicetype?: ReferenceType[];
}

export interface ESPage {
  currentPage: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface Paged<T> {
  aggregations: any;
  hits: T[];
  page: ESPage;
}

export interface Link {
  href: string;
}
export interface Links {
  next: Link;
  self: Link;
}

export interface CmsArticle {
  id: string;
  type: string;
  created: string;
  changed: string;
  title: string;
  field_ingress: string;
  field_modules: any;
  langcode: string;
  links: Partial<Links>;
}
