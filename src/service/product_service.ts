import axios from 'axios'

export interface Book {
  book_id: number
  title: string
  author: string
  genre: string
  publisher: string
}

class LibraryService {
  async getBooks(): Promise<Array<Book>> {
    const { data } = await axios.get('http://localhost:8090/api/book')
    return data
  }
}

export default new LibraryService()
