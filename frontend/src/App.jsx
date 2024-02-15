import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/Home/HomePage";
import SignUpPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Verification from "./pages/SignupPage/Verification";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserContext from "./contexts/UserContext";
import EventsPage from "./pages/EventsPage/EventsPage";

const App = () => {
  const { isAuthenticated } = useContext(UserContext);

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
        <Route
          path="/user-profile/:userId"
          element={
            isAuthenticated ? (
              <Layout>
                <UserProfile />
              </Layout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/verify/:token" element={<Verification />} />
        <Route
          path="/events"
          element={
            <Layout>
              <EventsPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
