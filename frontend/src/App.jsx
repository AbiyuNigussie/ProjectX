import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/nav" element={<NavBar />} />
        <Route path="/test" element={"Test"} />
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
