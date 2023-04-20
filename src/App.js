import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./page";

import Introduction from "./page/Introduction/Introduction";
import Regulations from "./page/Introduction/Regulations";
import ExCommittee from "./page/Introduction/ExCommittee";
import Solution from "./page/Introduction/Solution";

import Incorporation from "./page/Incorporation/Incorporation";
import SearchPage from "./page/search";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/exCommittee" element={<ExCommittee />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/incorporation" element={<Incorporation />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
