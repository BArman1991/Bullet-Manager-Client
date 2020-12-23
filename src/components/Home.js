import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import styled from "styled-components";


const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <Wrapper>
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`

`
