export const inputValidation = (
  searchTerm: string,
  minLength: number
): boolean => {
  return searchTerm.length > minLength;
};
