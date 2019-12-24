export interface SearchProps {
  handleOnSubmit(value: any): void;
}

export interface AppProps {
  handleCreate(): void;
  newList: boolean;
}

export interface HomeProps {
  newList: boolean;
}

export interface SearchValue {
  search: string;
}
