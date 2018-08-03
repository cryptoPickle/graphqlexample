import { resolve } from "dns";

const resolvers = {
  Query: {
    author:(_, args, ctx) => ctx.authorLoader.load(args.id)
  },
  AuthorType: {
    name: (xml) => xml.GoodreadsResponse.author[0].name[0],
    books: (xml,args,ctx) => {
      const ids = xml.GoodreadsResponse.author[0].books[0].book.map(elem => elem.id[0]._);
      return ctx.booksLoader.loadMany(ids);
    }
  },
  BookType: {
    title: (xml,args,ctx) => {
      const title = xml.GoodreadsResponse.book[0].title[0];
      return args.lang ? ctx.translate(args.lang, title) : title
    },
    isbn: (xml) => xml.GoodreadsResponse.book[0].isbn[0],
    authors: (xml,_,ctx) => {
      const authorElem = xml.GoodreadsResponse.book[0].authors[0].author;
      const ids = authorElem.map(elem => elem.id[0]);
      return ctx.authorLoader.loadMany(ids)
    } 
  }
}

export default resolvers;