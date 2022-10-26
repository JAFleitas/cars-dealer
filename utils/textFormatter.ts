export function capitalize(text: string): string {
  const newText = text.trim().replace(/^\w/, (c) => c.toUpperCase());

  return newText;
}

export function URLFormatter(url: string): string {
  const newText = url.replaceAll("-", " ");
  const textCapitalize = capitalize(newText);

  return textCapitalize;
}
