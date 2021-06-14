export enum Environment {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production'
}

export enum Entity {
  DATASET = 'dataset'
}

export enum AccessRight {
  PUBLIC = 'PUBLIC',
  RESTRICTED = 'RESTRICTED',
  NON_PUBLIC = 'NON_PUBLIC'
}

export enum DataFormat {
  JSON = 'application/json',
  CSV = 'text/csv',
  XML = 'application/xml',
  YAML = 'application/x.yaml',
  GEOJSON = 'application/vnd.geo+json',
  HTML = 'text/html',
  SOSI = 'application/x-ogc-sosi',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS = 'application/vnd.sealed-xls',
  RSS = 'text/xml',
  RDF_XML = 'application/rdf+xml',
  TURTLE = 'text/turtle',
  JSONLD = 'application/ld+json',
  TXT = 'text/plain',
  SIRI = 'application/x.siri',
  UNKNOWN = 'unknown'
}
