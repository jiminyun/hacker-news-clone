import React from "react";
import ListItem from "components/ListItem";

import { ListWrapper } from "./styles";

const List = props => (
  <ListWrapper>
    {props.stories.map(story => (
      <ListItem key={story.id} {...story} />
    ))}
  </ListWrapper>
);

export default List;
