import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./page";

import Introduction from "./page/Introduction/Introduction";
import Regulations from "./page/Introduction/Regulations";
import ExCommittee from "./page/Introduction/ExCommittee";
import Solution from "./page/Introduction/Solution";
import Office from "./page/Incorporation/items/Office";
import Incorporation from "./page/Incorporation/Incorporation";
import Oganize from "./page/Incorporation/items/Oganize";
import DetailUser from "./page/Incorporation/items/DetailUser";
import SearchPage from "./page/search";
import People from "./page/People";

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
          <Route path="/oganize" element={<Oganize />} />
          <Route path="/detailUser" element={<DetailUser />} />
          <Route path="/office" element={<Office />} />
          <Route path="/people" element={<People />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
