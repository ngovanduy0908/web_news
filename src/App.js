import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./page";
import RssFeeds from "./page/RSS";

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

import UserAuth from "./page/login";
import RegisterPage from "./page/login/RegisterPage";
import NotFound from "./page/NotFound";

import NewsPage from "./page/News";
import NewDetail from "./page/News/NewDetail";

import TradePage from "./page/Trade";
import DetailTrade from "./page/Trade/DetailTrade";
import ProjectPage from "./page/ProjectsPage";
import DetailProjectPage from "./page/ProjectsPage/DetailProjectPage";
import ContactPage from "./page/Contact";
import RssDetail from "./page/RSS/RssDetail";
import DetailPost from "./components/Detail";
import FeedbackPage from "./page/Feedback";
import DetailFeedback from "./page/Feedback/DetailFeedback";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/feeds" element={<RssFeeds />} />
          <Route path="/feeds/:slug" element={<RssDetail />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/regulations" element={<Regulations />} />
          <Route path="/exCommittee" element={<ExCommittee />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/incorporation" element={<Incorporation />} />

          <Route path="/user" element={<UserAuth />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          <Route path="/oganize" element={<Oganize />} />
          <Route path="/detailUser" element={<DetailUser />} />
          <Route path="/office" element={<Office />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:slug" element={<PeopleDetail />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewDetail />} />
          <Route path="/news/:slug/:subslug" element={<DetailPost />} />

          <Route path="/trade" element={<TradePage />} />
          <Route path="/trade/:slug" element={<DetailTrade />} />

          <Route path="/projects-page" element={<ProjectPage />} />
          <Route path="/projects-page/:slug" element={<DetailProjectPage />} />

          <Route path="/projects-page" element={<ProjectPage />} />

          <Route path="/contact-page" element={<ContactPage />} />

          <Route path="/feedbackPage" element={<FeedbackPage />} />
          <Route path="/detailsFeedback" element={<DetailFeedback />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
