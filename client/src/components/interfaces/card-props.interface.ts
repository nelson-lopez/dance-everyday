export default interface CardPropsInterface {
  date: string;
  name: string;
  id: number;
  description: string;
  handleDelete?(id: number): void;
  handleFlip?(
    date: string,
    name: string,
    description: string,
    id: number
  ): void;
  handleReturn?(): void;
}
