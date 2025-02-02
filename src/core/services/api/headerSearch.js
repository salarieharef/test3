import http from "../interceptor";
import axios from "axios";

export const headerCourseSearch = (input) => {
  const result = http.get(
    "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0&query=" +
      input
  );
  console.log(result);
  return result;
};

export const headerNewsSearch = (input) => {
  const result = http.get(
    "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=" +
      input
  );
  console.log(result);
  return result;
};
