import React, { useState } from "react";
import { FaGlobe, FaTimes } from "react-icons/fa";
const TopSection = ({setGlobalLanguage}) => {
  const languageHeadingText = {
    en: "Please Select Your Preferred Language",
    ja: "ご希望の言語を選択してください",
    zh: "请选择您偏好的语言",
  };

  const languageLabels = {
    en: "English",
    ja: "日本語",
    zh: "中文"
  };

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setGlobalLanguage(lang);
    setIsPopupOpen(false);
  };

  return (
    <div className="top-ctr-header">
      <div className="logo-bx">
        <img src="/assets/logo.png" alt="logo" />
      </div>

      <div className="right-bxHeader">
        <div className="slectedLanguange" onClick={() => setIsPopupOpen(true)}>
          <FaGlobe style={{ marginRight: "6px", color: "#000" }} />
          {languageLabels[selectedLanguage]}
        </div>

        {isPopupOpen && (
          <div className="popupBg">
            <div className="change-lng">
              <button
                className="close-btn"
                onClick={() => setIsPopupOpen(false)}
              >
                <FaTimes style={{ fontWeight: "100", fontSize: "20px" }} />
              </button>
              <div className="lnghdr">{languageHeadingText[selectedLanguage]}</div>
              <div className="option-grid">
                <span
                  className="item"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </span>
                <span
                  className="item"
                  onClick={() => handleLanguageChange("ja")}
                >
                  日本語
                </span>
                <span
                  className="item full"
                  onClick={() => handleLanguageChange("zh")}
                >
                  中文
                </span>
              </div>
            </div>
          </div>
        )}

        <button className="btn signInBtn">Sign in or Join</button>
      </div>
    </div>
  );
};

export default TopSection;
