import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import Layout from "./components/Layout.jsx";
import client from "./gql/ApolloClient.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <Router>
      <Layout>
        <App />
      </Layout>
    </Router>
  </ApolloProvider>
);
