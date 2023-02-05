import { createSlice } from "@reduxjs/toolkit";

//Outsource this is another file or to a datastore.
const initialData = {
  books: [
    {
      position: "1",
      name: "The Lord of The Rings",
      author: "J.R.R. Tolkien",
      read: true,
      dateread: "2023-01-12",
      links: {
        authorwiki: "https://www.amazon.co.uk/J-R-R-Tolkien/e/B000ARC6KA/ref=aufs_dp_fta_dsk",
        bookwiki: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
        amazon: "https://amzn.eu/d/je4mueS",
        audible: "https://www.audible.co.uk/pd/The-Fellowship-of-the-Ring-Audiobook/0008487278?action_code=ASSGB149080119000H&share_location=pdp",
      },
      details: {
        coverimg: "https://m.media-amazon.com/images/I/41NYzoTpqIL._SY291_BO1,204,203,200_QL40_ML2_.jpg",
        synopsis: "Continuing the story begun in The Hobbit, all three parts of the epic masterpiece, The Lord of the Rings, in one paperback. Features the definitive edition of the text, fold-out flaps with the original two-colour maps, and a revised and expanded index. Sauron, the Dark Lord, has gathered to him all the Rings of Power – the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring – the ring that rules them all – which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as the Ring is entrusted to his care. He must leave his home and make a perilous journey across the realms of Middle-earth to the Crack of Doom, deep inside the territories of the Dark Lord. There he must destroy the Ring forever and foil the Dark Lord in his evil purpose. Since it was first published in 1954, The Lord of the Rings has been a book people have treasured. Steeped in unrivalled magic and otherworldliness, its sweeping fantasy has touched the hearts of young and old alike. This single-volume paperback edition is the definitive text, fully restored with almost 400 corrections – with the full co-operation of Christopher Tolkien – and features a striking new cover.",
      },
    },
    {
      position: "2",
      name: "Pride and Prejudice",
      author: "Jane Austen",
      read: false,
      dateread: "2023-01-12",
      links: {
        authorwiki: "",
        bookwiki: "",
        amazon: "",
        audible: "",
      },
      details: {
        coverimg: "https://m.media-amazon.com/images/I/51epBpMwvEL._SY346_.jpg",
        synopsis: "The synopsis",
      },
    },
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialData,
  reducers: {
    markAsRead(state, action) {
      const bookIndex = state.books.findIndex((book) => book.position === action.payload);
      state.books[bookIndex].read = !state.books[bookIndex].read;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
