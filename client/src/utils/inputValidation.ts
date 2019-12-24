export const inputValidation = (
  searchTerm: string,
  minLength: number
): boolean => (searchTerm.length > minLength ? true : false);
