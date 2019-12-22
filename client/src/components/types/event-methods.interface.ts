export interface SearchProps {
  handleOnSubmit(value: string): void;
}

export interface AppProps {
  handleCreate(): void;
  newList: boolean;
}

export interface HomeProps {
  newList: boolean;
}
