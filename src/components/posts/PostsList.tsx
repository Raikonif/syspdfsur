import React from "react";
import PostItem from "~/components/posts/PostItem";
import textsConstants from "~/pages/ClientBlogs/Home/constants/texts.constants";

function PostsList() {
  return (
    <div className="flex flex-col">
      <ul className="m-1 flex flex-col p-1">
        {textsConstants.body.postsList.map((item: any) => (
          <PostItem
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
