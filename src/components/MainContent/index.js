import React from "react";
import ContentCard from "../ContentCard";
import contentData from "../../data/content.json";
import { BackgroundContainer, Content } from "./mainContentElements";

const MainContent = () => {
  return (
    <BackgroundContainer>
      <Content>
        {contentData.map((content, index) => (
          <ContentCard
            key={content.id}
            {...content}
            reversed={index % 2 === 1}
          />
        ))}
      </Content>
    </BackgroundContainer>
  );
};

export default MainContent;
