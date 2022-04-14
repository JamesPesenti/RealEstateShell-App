
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

import Explore from "./screens/Explore"
import Offers from "./screens/Offers"
import Profile from "./screens/Profile"
import SignIn from "./screens/SignIn"
import SignUp from "./screens/SignUp"
import ForgotPassword from "./screens/ForgotPassword"

function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/profile" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
          <Navbar />
    </Router>
  </>
  );
}

export default App;
