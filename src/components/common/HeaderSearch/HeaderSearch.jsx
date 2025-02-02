import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import sampleImage from "../../../assets/images/logo.png";
import SearchResItems from "./SearchResItems";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import { headerCourseSearch, headerNewsSearch } from "../../../core/services/api/headerSearch";

const HeaderSearch = () => {
  const [wannaSearch, setWannaSearch] = useState(false);
  const [inputEntered, setInputEntered] = useState();

  const queryClient = new QueryClient();

  const { data: course, isLoading: courseIsLoading } = useQuery({
    queryKey: ["searchCourse", { inputEntered }],
    queryFn: () => {
      if (!inputEntered) return;
      return headerCourseSearch(inputEntered).then((data) => {
        return data.courseFilterDtos;
      });
    },
  });

  const { data: news, isLoading: newsIsLoading } = useQuery({
    queryKey: ["searchNews", { inputEntered }],
    queryFn: () => {
      if (!inputEntered) return;
      return headerNewsSearch(inputEntered).then((data) => {
        return data.news;
      });
    },
  });

  const handleInputChanges = (val) => {
    queryClient.invalidateQueries(["search"]);
    setInputEntered(val);
    if (val === "") setInputEntered("");
  };

  return (
    <>
      {/* search icon */}
      <Link
        to="#"
        className="text-sm font-semibold leading-6 text-gray-900 p-1.5 rounded-md bg-gray-200 hover:shadow-md hover:text-white hover:bg-gray-500 transition-all duration-200">
        <MagnifyingGlassIcon
          className="h-5 w-5 "
          aria-hidden="true"
          onClick={() => setWannaSearch(!wannaSearch)}
        />
      </Link>

      {/* modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.3 }}
        exit={{ delay: 0.5 }}
        onClick={() => {
          setWannaSearch(false);
          setInputEntered("");
        }}
        className={
          wannaSearch
            ? "fixed  top-0 left-0 w-[100vw] h-screen bg-primary dark:bg-teal-800 transition-all duration-500"
            : "hidden"
        }></motion.div>

      {/* search elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        exit={{ delay: 0.5 }}
        className="absolute w-[70%] left-[15%] top-16 font-irSans z-[1000]">
        {/* search input */}
        <div
          className={
            wannaSearch
              ? "w-full p-2 bg-white dark:bg-slate-900 rounded-t-md shadow-shadowDarkUp transition-all duration-200"
              : "hidden"
          }>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative flex items-center transition-all duration-200">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </motion.div>
              <input
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                type="search"
                name="search"
                id="default-search"
                value={inputEntered}
                className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:font-irSans"
                placeholder="جست و جو"
                onChange={(e) => handleInputChanges(e.target.value)}
                required
              />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                type="submit"
                className="text-white absolute left-0  bg-primary dark:bg-teal-800 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-600 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-teal-700 dark:focus:ring-teal-800 font-irSans">
                جست و جو
              </motion.button>
            </motion.div>
          </form>
        </div>
        {/* search list */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={
            inputEntered
              ? "w-full min-h-96 bg-white dark:bg-slate-800 dark:text-stone-200 bg-opacity-90 rounded-b-xl grid grid-cols-2 gap-x-1 z-50"
              : "hidden"
          }>
          {/* courses result */}
          <SearchResItems
            data={course}
            isLoading={courseIsLoading}
            header="دوره‌ها"
            wannaSearch={wannaSearch}
            setWannaSearch={setWannaSearch}
          />
          {/* news result */}
          <SearchResItems
            data={news}
            isLoading={newsIsLoading}
            header="اخبار و مقالات"
            wannaSearch={wannaSearch}
            setWannaSearch={setWannaSearch}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeaderSearch;
