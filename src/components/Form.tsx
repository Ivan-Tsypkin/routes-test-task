import FormProps from "../interfaces/FormProps";

const Form: React.FC<FormProps> = ({
  handleCompareOptionChange,
  input,
  handleInputChange,
  handleColumnOptionChange,
}) => {
  return (
    <form id="sortProps" className="sort-form">
      <select 
        id="selectSortProps" 
        className="sort-form__select-sort"
        onChange={handleCompareOptionChange}
      >
        <option value="equally">Равно</option>
        <option value="contains">Содержит</option>
        <option value="moreThen">Больше чем</option>
        <option value="lessThen">Меньше чем</option>
      </select>
      <input 
        type="text" 
        className="sort-form__sort-input"
        value={input || ""}
        onChange={handleInputChange}
      />
      <select 
        id="selectColumn" 
        defaultValue={"quantity"}
        className="sort-form__select-column"
        onChange={handleColumnOptionChange}
      >
        <option value="date">Дата</option>
        <option value="title">Название</option>
        <option value="quantity">Количество</option>
        <option value="distance">Расстояние</option>
      </select>
    </form>
  )
}

export default Form;