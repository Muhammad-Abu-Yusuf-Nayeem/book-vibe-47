import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../utility/AddToDB";
import Book from "./Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  console.log(allBooks);
  // ideally we will directly fetch the listed books from database

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  return (
    <div>
      <h3 className="text-3xl my-10">Listed books</h3>
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
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
