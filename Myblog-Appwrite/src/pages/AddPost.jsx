import React from "react";
import { Container } from "../Components/index";
import { PostForm } from "../Components/index";

function AddPost() {
  return (
    <div className="py-6">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
