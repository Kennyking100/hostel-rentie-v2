import React from "react";
import { Route, Routes } from "react-router-dom";
import FindRoommatesPage from "./components/FindRoommates";
import Wrapper from "./components/helpers/Wrapper";
import HomePage from "./components/Home";
import SavesPage from "./components/Saves";
import SearchPage from "./components/Search";
import SingleSearchItemPage from "./components/SingleSearchItem";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:searchId" element={<SingleSearchItemPage />} />
        <Route path="/find-roommate" element={<FindRoommatesPage />} />
        <Route path="/saves" element={<SavesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
