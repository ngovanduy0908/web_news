import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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

import LostPage from "./page/login/LostPage";
import UserEdit from "./page/login/UserEdit";
import Basic from "./page/userInfo/Basic";
import Avatar from "./page/userInfo/Avatar";

import { AuthContext } from "./context/authContext";
import { useContext } from "react";
import Email from "./page/userInfo/Email";
import Password from "./page/userInfo/Password";
import Question from "./page/userInfo/Question";
import TwoStepVeri from "./page/login/TwoStepVeri";
import StartVerify from "./page/userInfo/verify";
import Setup from "./page/userInfo/verify/Setup";
import Group from "./page/userInfo/Group";
import SafeMode from "./page/userInfo/SafeMode";
import UserInfo from "./page/userInfo/UserInfo";
import Test from "./components/Test";

import Page from "./page/Page";
import Member from "./page/Member";
import MenuMember from "./page/Member/MenuMember";
import MemberDetail from "./page/Member/MemberDetail";

function App() {
  const { currentUser } = useContext(AuthContext);
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
          {/* <Route path="/test" element={<Test />} /> */}

          <Route path="/user" element={<UserAuth />}>
            <Route
              path="login"
              element={
                currentUser ? <Navigate to="/user/editinfo" /> : <LoginPage />
              }
            />
            <Route path="register" element={<RegisterPage />} />
            <Route path="lostpass" element={<LostPage />} />

            <Route path="editinfo" element={<UserEdit />}>
              <Route path="" element={<Navigate to="basic" replace={true} />} />
              {currentUser ? (
                <>
                  <Route path="basic" element={<Basic />} />
                  <Route path="avatar" element={<Avatar />} />
                  <Route path="email" element={<Email />} />
                  <Route path="password" element={<Password />} />
                  <Route path="question" element={<Question />} />
                  <Route path="two-step-veri" element={<TwoStepVeri />} />
                  <Route path="group" element={<Group />} />
                  <Route path="safe-mode" element={<SafeMode />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/user/login" />} />
              )}
            </Route>
            <Route
              path=""
              element={currentUser ? <UserInfo /> : <LoginPage />}
            />
          </Route>

          <Route path="/two-step-verification" element={<StartVerify />} />
          <Route path="/two-step-verification/setup" element={<Setup />} />

          <Route path="/oganize" element={<Oganize />} />
          <Route path="/detailUser" element={<DetailUser />} />
          <Route path="/office" element={<Office />} />
          <Route path="/member" element={<Member />} />
          <Route path="/member/:id" element={<MemberDetail />} />

          <Route path="/member/:slug" element={<MenuMember />} />

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
          <Route path="/detailFeedback" element={<DetailFeedback />} />

          <Route path="/page" element={<Page />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
