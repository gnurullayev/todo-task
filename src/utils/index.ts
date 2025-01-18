export const filterOption = (
  input: string,
  option?: { label: string; value: string }
) =>
  (option?.label.toLocaleLowerCase() ?? "").includes(input.toLocaleLowerCase());

export const transformTextUpper = (text: string) => text.toUpperCase();

export function route(route: string, params: any = {}): string {
  let builtRoute = route;
  Object.keys(params).forEach((property) => {
    builtRoute = builtRoute.replace(`:${property}`, params[property]);
  });

  return builtRoute;
}
