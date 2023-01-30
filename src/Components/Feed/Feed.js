import React, { useState, useEffect } from "react";
import "./Feed.css";
import FeedCard from "./FeedCard";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function getPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log(data.posts);
    setPosts(data.posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  function addPosts() {
    const copyArray = [...posts];
    copyArray.unshift({
      userId: 10,
      id: posts.length + 1,
      name: "Harshit",
      tags: ["HTML", "CSS"],
      body: input,
      image: imageUrl,
    });
    setPosts(copyArray);
    setInput("");
    setImageUrl("");
  }

  console.log(posts);

  return (
    <div className="feed_container">
      <div className="feed_add">
        <div className="feed_add_input">
          <div>
            <input
              type="text"
              value={input}
              placeholder="Write something..."
              onChange={(event) => setInput(event.target.value)}
            />
            <input
              type="text"
              value={imageUrl}
              placeholder="Paste Image Url..."
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>

          <button onClick={addPosts}>Add</button>
        </div>

        {/* <button className="feed_add_photo">Add Photo</button> */}
      </div>

      {posts?.map((value) => (
        <FeedCard
          id={value.id}
          image={value.image}
          name={value.name}
          tags={value.tags}
          message={value.body}
          likeCount={value.reactions}
        />
      ))}
    </div>
  );
}

export default Feed;