import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Book from "./components/Book";
import NavBar from "./components/NavBar";
import axios from "axios";
import EditBook from "./components/EditBook";
import Alert from "@material-ui/lab/Alert";

const App = () => {
  const [books, setBooks] = React.useState([]);
  const [editCheck, setEditCheck] = React.useState(false);
  const [messageDelete, setMessageDelete] = React.useState(false);

  const [id, setId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3004/books").then((res) => setBooks(res.data));
  }, []);

  const nullState = () => {
    setTitle("");
    setId("");
    setAuthor("");
    setDate("");
  };

  const FastMessageDelete = () => {
    setMessageDelete(true);
    setTimeout(() => setMessageDelete(false), 2800);
  };

  const handleDeleteBook = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
    FastMessageDelete();
  };
  const handleAddBook = () => {
    const newTodo = {
      title,
      author,
      date,
      id: Date.now(),
      img:
        "https://cdn.lifehack.org/wp-content/uploads/2019/07/think-and-grow-rich.jpg",
    };
    setBooks((prev) => [newTodo, ...prev]);
    setEditCheck(false);
    nullState();
  };

  const handleClickUpdate = (id) => {
    const obj = books.find((prev) => prev.id === id);
    obj.title = title;
    obj.author = author;
    obj.date = date;
    nullState();
    setEditCheck(false);
  };
  const handleUpdateBook = (id, title, author, date) => {
    setId(id);
    setTitle(title);
    setAuthor(author);
    setDate(date);
  };
  return (
    <div className="App">
      <NavBar
        setEditCheck={setEditCheck}
        handleAddBook={handleAddBook}
        nullState={nullState}
      />
      <Box mt={8}>
        <Container>
          {messageDelete && (
            <Box mb={1}>
              <Alert severity="success">
                The book has been deleted - success
              </Alert>
            </Box>
          )}
          <Grid container spacing={3} direction="row" justify="space-between">
            {editCheck && (
              <EditBook
                setEditCheck={setEditCheck}
                id={id}
                title={title}
                author={author}
                date={date}
                setId={setId}
                setTitle={setTitle}
                setAuthor={setAuthor}
                setDate={setDate}
                handleAddBook={handleAddBook}
                handleClickUpdate={handleClickUpdate}
              />
            )}
            {books &&
              books.map((book) => (
                <Grid key={book.id} item sm={4}>
                  <Book
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    date={book.date}
                    img={book.img}
                    setEditCheck={setEditCheck}
                    handleDeleteBook={handleDeleteBook}
                    handleUpdateBook={handleUpdateBook}
                    handleClickUpdate={handleClickUpdate}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default App;
