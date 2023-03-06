import "./App.css";
import AddBook from "./components/AddBook/AddBook";
import BookContainer from "./components/BookContainer/BookContainer";
import BookHeading from "./components/BookHeading/BookHeading";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <BookHeading />
            <BookContainer />
          </div>
          <div>
            <AddBook />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
