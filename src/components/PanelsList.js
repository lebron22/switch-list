import React from "react";
import Panel from "../components/Panel";

const PanelsList = ({ posts, handleSwitchChange }) => {
  const renderPanels = posts.map(post => {
    return (
      <Panel
        key={post.id}
        post={post}
        handleSwitchChange={handleSwitchChange}
      />
    );
  });

  return <div className="panels-list">{renderPanels}</div>;
};

export default PanelsList;
