import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogs, setBlogs] = useState();

  const getBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3001/blogs");
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Row>
      {blogs &&
        blogs.map((blog) => (
          <Col
            md={4}
            style={{
              marginBottom: 50,
            }}
          >
            <BlogItem key={blog._id} {...blog} />
          </Col>
        ))}
    </Row>
  );
};

export default BlogList;
