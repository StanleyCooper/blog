import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./layout/Header";
import NewBlogForm from "./components/NewBlogForm";

export default function App() {
  return (
      <div>
        <Header />
        <Switch>
          <Route path="/new">
            <NewBlogForm />
          </Route>
          <Route path="/">
            <BlogList />
          </Route>
        </Switch>
      </div>
  )
}
