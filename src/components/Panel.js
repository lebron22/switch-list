import React from "react";
import Switch from "../components/Switch";
import PanelBody from "./PanelBody";

const Panel = ({ post, handleSwitchChange }) => {
  const { title, body, id, isOpened } = post;
  return (
    <section>
      <header className="panel__header">
        <Switch
          checked={isOpened}
          handleSwitchChange={() => handleSwitchChange(id)}
        />
        <h3 className="panel__heading">{title}</h3>
      </header>
      <PanelBody body={body} isOpened={isOpened} />
    </section>
  );
};

export default Panel;
