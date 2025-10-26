import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../utility/AddToDB";
import Book from "./Book";

const ListedBooks = () => {
  const [Sort, setSort] = useState("");
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const allBooks = useLoaderData();
  // console.log(allBooks);
  // ideally we will directly fetch the listed books from database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    // console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setReadList(readBookList);
    setWishList(wishBookList);
  }, []);

  const handleSort = (event, sortType) => {
    event.preventDefault();
    setSort(sortType);

    const sortedReadList = [...readList].sort((a, b) => {
      if (sortType === "Ratings") {
        return b.rating - a.rating;
      } else if (sortType === "Number of pages") {
        return b.totalPages - a.totalPages;
      } else if (sortType === "Publisher year") {
        return b.yearOfPublishing - a.yearOfPublishing;
      }
      return "";
    });
    setReadList(sortedReadList);

    const sortedWishList = [...wishList].sort((a, b) => {
      if (sortType === "Ratings") {
        return b.rating - a.rating;
      } else if (sortType === "Number of pages") {
        return b.totalPages - a.totalPages;
      } else if (sortType === "Publisher year") {
        return b.yearOfPublishing - a.yearOfPublishing;
      }
      return "";
    });
    setWishList(sortedWishList);
  };

  return (
    <div className="flex flex-col">
      <div className="my-10 flex h-16 rounded-lg items-center bg-gray-200 w-[100%]">
        <h3 className="text-3xl mx-auto  font-bold ">Books</h3>
      </div>

      <details className="dropdown mx-auto mb-4">
        <summary className="btn  bg-green-600 text-white border-0 hover:bg-green-800 ">
          {Sort ? Sort : "Sort by ⬇️"}
        </summary>
        <ul className="menu dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={(e) => handleSort(e, "Ratings")}>Ratings</li>
          <li onClick={(e) => handleSort(e, "Number of pages")}>
            Number of pages
          </li>
          <li onClick={(e) => handleSort(e, "Publisher year")}>
            Publisher year
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="my-8">
            <h2 className="text-2xl">Books I read</h2>
            <p>Read list:{readList.length}</p>
            <div className="grid grid-cols-3">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-8">
            <h2 className="text-2xl">My wish list</h2>
            <p>Read list:{wishList.length}</p>
            <div className="grid grid-cols-3">
              {wishList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
