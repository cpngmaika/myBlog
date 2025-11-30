import React, { useState } from "react";
import "./Sidebar.css";
import avatar from "../../../image/MyAvatar.jpg";
import TabButton from "../TabButton";
import { TEAM } from "../../../../teamData";
import AddNews from "./AddNews";

function Sidebar() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(key) {
    setSelectedTopic(key);
  }

  const selected = TEAM[selectedTopic];

  return (
    <>
      <div className="side-container">
        {/* Profile */}
        <div className="side-profile">
          <img src={avatar} alt="profile" className="side-profile__avatar" />
          <div className="side-profile__dsc">
            <h2 className="side-profile__title">About me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium praesentium ducimus autem?
            </p>
            <menu className="side-profile__social">
              <span>
                <i class="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i class="fa-brands fa-x-twitter"></i>
              </span>
              <span>
                <i class="fa-brands fa-square-instagram"></i>
              </span>
            </menu>
          </div>
        </div>

        {/* Team selector */}
        <div className="side-team">
          <h2 className="side-team__title">Members</h2>

          {/* Buttons container */}
          <div className="side-team__tabs">
            <TabButton
              isSelected={selectedTopic === "NVC"}
              onSelect={() => handleSelect("NVC")}
            >
              NVC
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "HCP"}
              onSelect={() => handleSelect("HCP")}
            >
              HCP
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "LHT"}
              onSelect={() => handleSelect("LHT")}
            >
              LHT
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "NDT"}
              onSelect={() => handleSelect("NDT")}
            >
              NDT
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "NPT"}
              onSelect={() => handleSelect("NPT")}
            >
              NPT
            </TabButton>
          </div>

          {selectedTopic ? (
            <div className="side-team__member">
              <img
                src={selected.image}
                alt={selected.title}
                className="side-team__avatar"
              />
              <h2 className="side-team__title">{selected.title}</h2>
              <p className="side-team__dsc">{selected.desc}</p>
            </div>
          ) : (
            <p>Chọn nút bấm để xem thành viên</p>
          )}
        </div>

        <AddNews/>

      </div>
    </>
  );
}

export default Sidebar;
