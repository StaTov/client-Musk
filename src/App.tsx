import { useEffect } from "react";
import { Route, Routes } from "react-router";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Contacts from "./components/Contacts/Contacts";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Flights from "./components/Flights/Flights";
import Guarantees from "./components/Guarantees/Guarantees";
import MainPage from "./components/MainPage/MainPage";
import Nav from "./components/Nav/Nav";
import Technologies from "./components/Technologies/Texhnologies";
import { initializeBenefits } from "./features/redusers/BenefitsBlockSlice";
import { useAppDispatch } from "./hooks";


function App() {
 
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeBenefits())
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tech" element={<Technologies />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/auth/admin/login" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
