import { useState } from "react";
import TableProps from "../interfaces/TableProps";

const Table: React.FC<TableProps> = ({
  handleColumnSortChange,
  setColumnSortKey,
  columnSortDirection,
  routeList,
}) => {
  const [arrowVisible, setArrowVisible] = useState("");   // Стейт видимости стрелки направления сортировки

  return (
    <table>
      <thead>
        <tr>
          <th 
            className="columnHead columnHead_date" 
            onClick={() => {
              handleColumnSortChange(); 
              setColumnSortKey("date");
              setArrowVisible("date")
            }}
          >
            <span className="columnHead__title">Дата</span>
            {arrowVisible === "date"
              ? <span className={`
                  columnHead__arrow 
                  ${(columnSortDirection === "des" || columnSortDirection === "") ? "" : "columnHead__arrow_rotated"}
                `}>▼</span>
              : <span className="columnHead__arrow">⬍</span>
            }
          </th>

          <th 
            className="columnHead" 
            onClick={() => {
              handleColumnSortChange(); 
              setColumnSortKey("title");
              setArrowVisible("title")
            }}
          >
            <span className="columnHead__title">Название</span>
            {arrowVisible === "title"
              ? <span className={`
                  columnHead__arrow 
                  ${(columnSortDirection === "des" || columnSortDirection === "") ? "" : "columnHead__arrow_rotated"}
                `}>▼</span>
              : <span className="columnHead__arrow">⬍</span>
            }
          </th>

          <th 
            className="columnHead columnHead_quantity" 
            onClick={() => {
              handleColumnSortChange(); 
              setColumnSortKey("quantity");
              setArrowVisible("quantity")
            }}
          >
            <span className="columnHead__title">Количество</span>
            {arrowVisible === "quantity"
              ? <span className={`
                  columnHead__arrow 
                  ${(columnSortDirection === "des" || columnSortDirection === "") ? "" : "columnHead__arrow_rotated"}
                `}>▼</span>
              : <span className="columnHead__arrow">⬍</span>
            }
          </th>

          <th 
            className="columnHead columnHead_distance" 
            onClick={() => {
              handleColumnSortChange(); 
              setColumnSortKey("distance");
              setArrowVisible("distance")
            }}
          >
            <span className="columnHead__title">Расстояние</span>
            {arrowVisible === "distance"
              ? <span className={`
                  columnHead__arrow 
                  ${(columnSortDirection === "des" || columnSortDirection === "") ? "" : "columnHead__arrow_rotated"}
                `}>▼</span>
              : <span className="columnHead__arrow">⬍</span>
            }
          </th>

        </tr>
      </thead>

      <tbody>
        {routeList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.distance}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
  )
}

export default Table;