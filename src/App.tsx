import { AppProvider } from "./context/context";
import StartPage from "./pages/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionPage from "./pages/QuestionPage";
import ScorePage from "./pages/ScorePage";
import Nav from "./pages/Nav";
function App() {
  return (
    <>
      <Nav />
      <main>
        <AppProvider>
          <BrowserRouter basename="quiz">
            <Routes>
              <Route index path="/" element={<StartPage />} />
              <Route  path="/question" element={<QuestionPage />} />
              <Route  path="/score" element={<ScorePage />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </main>
    </>
  );
}

export default App;
