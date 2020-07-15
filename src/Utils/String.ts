export function captalizeFirst(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function captalizeAllFirst(str: string) {
  return str
    .split(" ")
    .map(str => captalizeFirst(str))
    .join(" ");
}

export function removeNonNumeric(str: string) {
  return str.replace(/\D/g, "");
}
