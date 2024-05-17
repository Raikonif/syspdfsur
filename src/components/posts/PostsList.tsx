import React, { useContext, useEffect } from "react";
import PostCard from "~/components/posts/PostCard";
import textsConstants from "~/pages/blog_client/home/constants/texts.constants";
import PostContext, { IPostContext } from "src/pages/blog_client/home/context";

function PostsList() {
  const defaultPost = textsConstants.body.postsList[0];
  const { setPostSelected } = useContext(PostContext) as IPostContext;
  useEffect(() => {
    if (PostContext !== undefined && PostContext) {
      setPostSelected({
        title: defaultPost.title,
        description: defaultPost.description,
        image: defaultPost.image,
        date: defaultPost.date,
        key: defaultPost.id,
      });
    }
  }, []);
  return (
    <div className="flex flex-col">
      <ul className="m-1 flex flex-col p-1">
        {textsConstants.body.postsList.map((item: any) => (
          <PostCard
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
