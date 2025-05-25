function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeFirst(str: string): string {
  return str.toLowerCase().split(' ').map(capitalizeFirstLetter).join(' ');
}
