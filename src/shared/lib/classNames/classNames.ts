type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  otherClasses: string[] = [],
): string {
  return [
    cls,
    Object.entries(mods).filter(([_, v]) => Boolean(v)),
    ...otherClasses,
  ].join(" ");
}
