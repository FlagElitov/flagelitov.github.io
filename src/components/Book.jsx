import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function Book({
  id,
  title,
  author,
  date,
  img,
  setEditCheck,
  handleDeleteBook,
  handleUpdateBook,
}) {
  const editString = (string) => {
    return string
      .replace(/[^A-Za-zА-Яа-яЁё]/g, " ")
      .split(/\s+/)
      .filter((el) => el !== "")
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join(" ");
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {editString(title)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Author: {editString(author)}
            <br />
            Date: {date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setEditCheck(true);
            handleUpdateBook(id, title, author, date);
          }}
          startIcon={<CloudUploadIcon />}
        >
          Editable
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleDeleteBook(id)}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
