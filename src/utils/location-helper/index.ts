import qs from 'qs';

export const setParameter = (
  history: any,
  parameters: Record<string, string | number | null>
) => {
  const { pathname, search } = location;

  const currentParams = qs.parse(search, { ignoreQueryPrefix: true }) || {};
  const updatedParams = qs.stringify(
    { ...currentParams, ...parameters },
    {
      skipNulls: true,
      addQueryPrefix: true
    }
  );
  history.push(`${pathname}${updatedParams}`);
};

export const getParameter = (parameter: string) =>
  (qs.parse(location.search, { ignoreQueryPrefix: true })?.[
    parameter
  ] as string) ?? '';
