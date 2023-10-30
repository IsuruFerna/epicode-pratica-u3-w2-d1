import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

import fantacy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import scifi from "./data/scifi.json";

function App() {
   return (
      <div className="App vh-100">
         <header className="App-header">
            <MyNav />
         </header>
         <main>
            <Welcome />
            <BookList bookGenre={fantacy} />
            <BookList bookGenre={history} />
            <BookList bookGenre={horror} />
            <BookList bookGenre={romance} />
            <BookList bookGenre={scifi} />
         </main>
         <footer>
            <MyFooter />
         </footer>
      </div>
   );
}

export default App;
