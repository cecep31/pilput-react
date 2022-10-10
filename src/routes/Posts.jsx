import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // console.log(response);
        setPost(response.data);
        // console.log(post);
      })
      //   .catch(function (error) {
      //     console.log(error);
      //   })
      .finally(function () {
        // always executed
      });
  });

  return (
    <div>
      {post.map(($data, $key) => (
        <div key={$key}>{$data.title}</div>
      ))}
    </div>
  );
};

export default Posts;
