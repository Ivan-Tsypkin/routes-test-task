import Route from "../interfaces/Route"

export default interface TableProps {
  handleColumnSortChange: () => void,
  setColumnSortKey: (value: React.SetStateAction<string>) => void,
  columnSortDirection: string,
  routeList: Route[],
}