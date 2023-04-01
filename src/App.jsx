import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=cien+años+de+soledad')
      .then(response => response.json())
      .then(data => {
        setBooks(data.items);
      });
  }, []);

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "flex", alignItems: "center", flexDirection: "column", py: 4 }}>
      <h1>Books</h1>
      {books.map(book => (
        <Grid item lg={12} key={book.id} sx={{ my: 4, width: "100%" }}>
          <Grid item lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.volumeInfo.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autor: {book.volumeInfo.authors}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

{/* {books.map(book => (
            <div className='text-center w-100' key={book.id}>
              <h4>{book.volumeInfo.title}</h4>
            </div>
          ))}*/}
export default App;