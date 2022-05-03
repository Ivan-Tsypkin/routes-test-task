export default interface FormProps {
  handleCompareOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  input: string,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleColumnOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}