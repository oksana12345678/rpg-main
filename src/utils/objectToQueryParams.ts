type primitive = string | number | boolean | null | undefined;

type objectType = Record<string, primitive | Array<primitive>>;

function objectToQueryParams(obj: objectType): string {
  const params = new URLSearchParams();

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item !== undefined && item !== null) {
            params.append(key, item.toString());
          }
        });
      } else if (value !== undefined && value !== null) {
        params.append(key, value.toString());
      }
    }
  }

  return params.toString();
}

export default objectToQueryParams;
