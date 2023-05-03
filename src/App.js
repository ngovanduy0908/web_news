import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./page";

import Introduction from "./page/Introduction/Introduction";
import Regulations from "./page/Introduction/Regulations";
import ExCommittee from "./page/Introduction/ExCommittee";
import Solution from "./page/Introduction/Solution";
import Office from "./page/Incorporation/items/Office";
import Incorporation from "./page/Incorporation/Incorporation";

import LoginPage from "./page/login/LoginPage";

import Oganize from "./page/Incorporation/items/Oganize";
import DetailUser from "./page/Incorporation/items/DetailUser";
import SearchPage from "./page/search";
import People from "./page/People";
import PeopleDetail from "./page/People/PeopleDetail";
import NewsPage from "./page/News";
import NewDetail from "./page/News/NewDetail";

import TradePage from "./page/Trade";
import DetailTrade from "./page/Trade/DetailTrade";
import ProjectPage from "./page/ProjectsPage";
import DetailProjectPage from "./page/ProjectsPage/DetailProjectPage";
import ContactPage from "./page/Contact";
import Page from "./page/Page";

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

          <Route path="/user/login" element={<LoginPage />} />

          <Route path="/oganize" element={<Oganize />} />
          <Route path="/detailUser" element={<DetailUser />} />
          <Route path="/office" element={<Office />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:slug" element={<PeopleDetail />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewDetail />} />

          <Route path="/trade" element={<TradePage />} />
          <Route path="/trade/:slug" element={<DetailTrade />} />

          <Route path="/projects-page" element={<ProjectPage />} />
          <Route path="/projects-page/:slug" element={<DetailProjectPage />} />

          <Route path="/projects-page" element={<ProjectPage />} />

          <Route path="/contact-page" element={<ContactPage />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
