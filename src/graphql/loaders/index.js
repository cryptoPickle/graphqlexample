import Dataloader from 'dataloader';
import {fetchAuthor,fetchBooks} from '../../api';

const loaders = {
  authorLoader: new Dataloader(keys => {
    return Promise.all(keys.map(fetchAuthor))
  }),
  booksLoader: new Dataloader(keys => {
    return Promise.all(keys.map(fetchBooks));
  })
}

export default loaders;