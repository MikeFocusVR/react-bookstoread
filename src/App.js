import { useSelector } from "react-redux";

import Auth from "./components/Auth";
import Header from "./components/Layout/Header";

import "./AppColourScheme.css";
import BookList from "./components/BookList";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {!isAuth && <Auth />}
      {isAuth && (
        <>
          <Header />
          <BookList />
        </>
      )}
    </div>
  );
}

export default App;
