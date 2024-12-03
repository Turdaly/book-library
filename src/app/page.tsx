import Filter from "./components/Filter/Filter";
import BookForm from "./components/BookForm/BookForm";
import BookList from "./components/BookList/BookList";
import Error from "./components/Error/Error";
import './page.css'
export default function Home() {
  return (
    <div>
      <header>
        <h1>Book Library</h1>
      </header>
      <main>
        <div className="app-main">
          <div className="app-left-column">
            <BookForm />
          </div>
          <div className="app-right-column">
            <Filter />
            <BookList />
          </div>
        </div>
      </main>
      <Error />
    </div>
  );
}
