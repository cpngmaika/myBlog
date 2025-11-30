import React from "react";
import "./SideIcon.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import MOON_NIGHT from "../../../sound/moon_night.m4a"

function SideIcon() {
  const [showIcon, setShowIcon] = useState(false);
  const toggleIcon = () => {
    setShowIcon((prev) => !prev);
  }; //bật tắt 3 icon

  const [music, setMusic] = useState(false);
  const toggleMusic = () => {
    setMusic((prev) => !prev);
  };

  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  const [setting, setSetting] = useState(false);
  const toggleSettings = () => {
    setSetting((prev) => !prev);
  }; //hiện cài đặt

  return (
    <>
      <div className="open-btn">
        <button onClick={toggleIcon} className="show-btn">
          <p>◀</p>
        </button>
      </div>

      {showIcon && (
        <div className="icon-container">
          <button onClick={toggleMusic} className="icon-btn">
            {music ? (
              <i className="fa-solid fa-volume-high"></i>
            ) : (
              <i className="fa-solid fa-volume-xmark"></i>
            )}
          </button>

          <button
            onClick={toggleTheme}
            className={`icon-btn ${theme ? "light-mode" : "dark-mode"}`}
          >
            <i className="fa-solid fa-moon"></i>
          </button>

          <button onClick={toggleSettings} className="icon-btn">
            <i className="fa-solid fa-gear"></i>
          </button>
        </div>
      )}

      {setting &&
        ReactDOM.createPortal(
          <menu className="setting-panel">
            <div className="setting-panel__header">Setting</div>
          </menu>,
          document.body
        )}

      {music && <audio src={MOON_NIGHT} autoPlay loop />}
    </>
  );
}

export default SideIcon;
