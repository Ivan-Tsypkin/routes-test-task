import { useEffect, useState } from 'react';
import Route from "../interfaces/Route"
import Form from './Form';
import Table from './Table';
import { data } from "../constants/routesData"


function App() {
  const [routeListInitial, setRouteListInitial] = useState<Route[]>([]);  // Стейт начальных данных
  const [filteredRouteList, setFilteredRouteList] = useState<Route[]>([]);  // Стейт отфильтрованных данных
  const [compareOption, setCompareOption] = useState("equally");  // Стейт опции списка "Равно, содержит..."
  const [columnOption, setColumnOption] = useState("quantity");   // Стейт опции выбора колонки для фильтрации
  const [input, setInput] = useState("");   // Стейт ввода ключевого слова или числа
  const [columnSortDirection, setColumnSortDirection] = useState("");   // Стейт направления сортировки списка: восходящее/нисходящее
  const [columnSortKey, setColumnSortKey] = useState("");   // Стейт выбора колонки для сортировки
  const [routeListLastRenderIndex, setRouteListLastRenderIndex] = useState(25);   // Стейт индекса массива, для пагинации по скроллу

  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;    // Регулярное выражение для форматирования даты

  // Фильтрация данных
  const handleFilterList = () => {
    if (input) {
      let filtered = [];
      switch (compareOption) {
        case "contains":
          filtered = routeListInitial.filter(item => {
            return item[columnOption].toString().toLowerCase().includes(input.toLowerCase())
          });
          handleColumnSort(columnSortKey, filtered);
          break;
        case "equally":
          if (columnOption === "date") {
            const dateFromInput = new Date(input.toString().replace(pattern, "$2-$1-$3"));
            filtered = routeListInitial.filter(item => {
              const dateFromList = new Date(item[columnOption].toString().replace(pattern, "$2-$1-$3"));
              return +dateFromList === +dateFromInput;
            });
          } else {
            filtered = routeListInitial.filter(item => {
              return Number(item[columnOption]) === Number(input);
            });
          }
          handleColumnSort(columnSortKey, filtered);
          break;
        case "moreThen":
          if (columnOption === "date") {
            const dateFromInput = new Date(input.toString().replace(pattern, "$2-$1-$3"));
            filtered = routeListInitial.filter(item => {
              const dateFromList = new Date(item[columnOption].toString().replace(pattern, "$2-$1-$3"));
              return +dateFromList > +dateFromInput;
            });
          } else {
            filtered = routeListInitial.filter(item => {
              return Number(item[columnOption]) > Number(input);
            });
          }
          handleColumnSort(columnSortKey, filtered);
          break;
        case "lessThen":
          if (columnOption === "date") {
            const dateFromInput = new Date(input.toString().replace(pattern, "$2-$1-$3"));
            filtered = routeListInitial.filter(item => {
              const dateFromList = new Date(item[columnOption].toString().replace(pattern, "$2-$1-$3"));
              return +dateFromList < +dateFromInput;
            });
          } else {
            filtered = routeListInitial.filter(item => {
              return Number(item[columnOption]) < Number(input);
            });
          }
          handleColumnSort(columnSortKey, filtered);
          break;
      }
    } else {
      handleColumnSort(columnSortKey, routeListInitial);
    }
  }

  // Изменение опции списка "Равно, сожержит..."
  const handleCompareOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCompareOption(event.target.value);
  }

  // Изменение опции выбора колонки по которой будет фильтрация
  const handleColumnOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColumnOption(event.target.value);
  }

  // Изменение ключевого слова или числа
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  // Изменение направления сортировки
  const handleColumnSortChange = () => {
    if (columnSortDirection === "" || columnSortDirection === "asc") {
      setColumnSortDirection("des");
    } else {
      setColumnSortDirection("asc");
    }
  }

  // Функция сортировки. всё таки добавил сортировку по дате, без неё будет не удобно
  const handleColumnSort = (sortKey: string, arr: Route[]) => {
    let sortedArr = [];
    switch (sortKey) {
      case "date":
        if (columnSortDirection === "asc") {
          sortedArr = arr.concat().sort((a, b) => {
            const dateA = new Date(a[sortKey].toString().replace(pattern, "$2-$1-$3"));
            const dateB = new Date(b[sortKey].toString().replace(pattern, "$2-$1-$3"));
            return +dateA - +dateB;
          });
        } else {
          sortedArr = arr.concat().sort((a, b) => {
            const dateA = new Date(a[sortKey].toString().replace(pattern, "$2-$1-$3"));
            const dateB = new Date(b[sortKey].toString().replace(pattern, "$2-$1-$3"));
            return +dateB - +dateA;
          });
        }
        setFilteredRouteList(sortedArr);
        break;
      case "title":
        if (columnSortDirection === "asc") {
          sortedArr = arr.concat().sort((a, b) => {
            return a[sortKey].toString().localeCompare(b[sortKey].toString());
          });
        } else {
          sortedArr = arr.concat().sort((a, b) => {
            return b[sortKey].toString().localeCompare(a[sortKey].toString());
          });
        }
        setFilteredRouteList(sortedArr);
        break;
      case "quantity":
      case "distance":
        if (columnSortDirection === "asc") {
          sortedArr = arr.concat().sort((a, b) => {
            return Number(a[sortKey]) - Number(b[sortKey]);
          });
        } else {
          sortedArr = arr.concat().sort((a, b) => {
            return Number(b[sortKey]) - Number(a[sortKey]);
          });
        }
        setFilteredRouteList(sortedArr);
        break;
      default:
        setFilteredRouteList(arr);
    }
  }

  // Ивент по скролу для пагинации
  const handleScroll = (event: Event) => {
    const document = event.target as Document
    if (document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 100) {
      console.log("scroll");
      setRouteListLastRenderIndex(prev => prev + 25)
    }
  }

  // Устанавливаем данные
  useEffect(() => {
    setRouteListInitial(data);
    setFilteredRouteList(data);
  }, [])

  // Фильтрация по изменения опций поиска
  useEffect(() => {
    handleFilterList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, compareOption, columnOption, routeListInitial])

  // Сортировка по изменению опций сортировки
  useEffect(() => {
    handleColumnSort(columnSortKey, filteredRouteList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnSortKey, columnSortDirection])

  // Установка слушателя на скролл
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return function () {
      document.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <div className="App">
      <Form
        handleCompareOptionChange={handleCompareOptionChange}
        input={input}
        handleInputChange={handleInputChange}
        handleColumnOptionChange={handleColumnOptionChange}
      />
      <Table 
        handleColumnSortChange={handleColumnSortChange}
        setColumnSortKey={setColumnSortKey}
        columnSortDirection={columnSortDirection}
        routeList={filteredRouteList.slice(0, routeListLastRenderIndex)}
      />
    </div>
  );
}

export default App;
