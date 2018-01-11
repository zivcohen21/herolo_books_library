export default (books, text) => {
    return books.filter((book) => {

        return (book.author.toLowerCase().includes(text.toLowerCase()) ||
            book.title.toLowerCase().includes(text.toLowerCase()));
    });
};