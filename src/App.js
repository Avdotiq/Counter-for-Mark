import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./Pages/Game";
import Main from "./Pages/Main";
import Score from "./Pages/Score";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/score" element={<Score />} />
            <Route path="/game" element={<Game />} />
        </Routes>
    );
}

export default App;
