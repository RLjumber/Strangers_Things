import getPosts from "./getPosts";
import { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsAsync = async () => {
      const posts = await getPosts();

        setPosts(posts);
        // console.log("this is posts: ", posts);
    };
    getPostsAsync();
  }, []);

  return (
    <div className="allPosts">
      {posts.map(({ title, price, description, location, messages, _id }) => {
        return (
            <div key={_id} className="post">
                <span className="postMain">
                    <h3>{title.toUpperCase()}</h3>
                    <h3>{price}</h3>
                </span>
                <span>
                    <h4>Located in {location}</h4>
                </span>
                <span>
                    <p>{description}</p>
                </span>
                <span>
                    <p>{messages}</p>
                </span>
            </div>
        )
      })}
    </div>
  );
}

export default Posts;
