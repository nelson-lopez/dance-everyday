export default interface CardPropsInterface {
  date: string;
  description: string;
  id: number;
  name: string;
  handleDelete(id: number): null;
}
