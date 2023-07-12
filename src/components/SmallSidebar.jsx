import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <button className="close-btn" onClick={() => console.log("toggle")}>
            <FaTimes />
          </button>
          <header>
            <Logo></Logo>
          </header>
          <div className="nav-links">nav link</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
