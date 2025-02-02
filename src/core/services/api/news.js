import http from '../interceptor'

export const getAllNews = async (params) => {
    const result = await http.get(
      `/News?PageNumber=${params.PageNumber}&RowsOfPage=${params.RowsOfPage}&SortingCol=${params.SortingCol}&SortType=${params.SortType}&Query=${params.Query}`
    );
    return result;
  };

  export const getAllNewsPure = async () => {
    const result = await http.get(
      `/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC&Query=`
    );
    return result;
  };

  export const getInfiniteAllNews = (params) => {
    const result = http.get(
      `/News?PageNumber=${params.PageNumber}&RowsOfPage=${params.RowsOfPage}&SortingCol=${params.SortingCol}&SortType=${params.SortType}&Query=`
    );
    console.log(result);
    return result;
  };


  // used in SliderRelationNews for slider
  export const getNewsWithId = async (id) => {
    const result = await http.get(
      `/News/${id}`
    );
    return result;
  };

  