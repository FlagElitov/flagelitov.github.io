import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import validator from "validator";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    textAlign: "center",
    margin: "auto",
    marginTop: 40,
    position: "fixed",
    zIndex: 1,
    left: "38.3%",
  },
  media: {
    height: 140,
  },
  marginBottom: {
    marginBottom: 10,
  },
  success: {
    color: "green",
    fontSize: 13,
  },
  error: {
    color: "red",
  },
});

const AddUser = ({
  setEditCheck,
  id,
  title,
  author,
  date,
  setTitle,
  setAuthor,
  setDate,
  handleAddBook,
  handleClickUpdate,
}) => {
  const classes = useStyles();

  const [modalStyle] = React.useState({
    top: `80 px`,
    left: `$38.3%`,
  });
  const dateBoolean = validator.isDate(`${date}`, []);
  return (
    <Card style={modalStyle} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          title="Avatar"
        />
        <CardContent>
          <FormControl>
            <InputLabel htmlFor="my-input-title">Title book</InputLabel>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="my-input-title"
              aria-describedby="my-helper-title"
            />
            <FormHelperText id="my-helper-title">
              {title ? (
                <span className={classes.success}>Success title</span>
              ) : (
                <span className={classes.error}>Write Title</span>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input-author">Author</InputLabel>
            <Input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              id="my-input-author"
              aria-describedby="my-helper-author"
            />
            <FormHelperText id="my-helper-author">
              {author ? (
                <span className={classes.success}> Success author</span>
              ) : (
                <span className={classes.error}>Write Author</span>
              )}
            </FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-input-date">Date</InputLabel>
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="my-input-date"
              aria-describedby="my-helper-date"
            />
            <FormHelperText id="my-helper-date">
              {dateBoolean ? (
                <span className={classes.success}> Success date</span>
              ) : (
                <span className={classes.error}>Error Date</span>
              )}
            </FormHelperText>
          </FormControl>
        </CardContent>
      </CardActionArea>
      <Box>
        <Button
          className={classes.marginBottom}
          onClick={() => (id ? handleClickUpdate(id) : handleAddBook())}
          disabled={(!author && !title) || !dateBoolean}
          variant="contained"
          color="secondary"
        >
          {id ? "To update" : "To create"}
        </Button>
      </Box>
      <Box ml={1}>
        <Button
          className={classes.marginBottom}
          onClick={() => setEditCheck(false)}
          variant="contained"
          color="secondary"
        >
          {"Close"}
        </Button>
      </Box>
    </Card>
  );
};

export default AddUser;
