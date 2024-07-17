import { BiMoon, BiMenu } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import React, { useState } from 'react';
import './home.scss';
import logo from './logo.jpg';
import { useGetProductsQuery } from '../../context/Api/company';

const Home = () => {
  const { data: companies, error, isLoading } = useGetProductsQuery({ status: 'active' });
  console.log(companies);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`admin-panel ${isNightMode ? 'night-mode' : ''}`}>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="items">
          <div className="item">
            <AiOutlineHome /><span>Dashboard</span>
          </div>
          <div className="item">
            <GrUpdate /><span>Updates</span>
          </div>
          <div className="item settings" onClick={toggleSettings}>
            <AiFillSetting /><span>Settings</span>
            {isSettingsOpen ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {isSettingsOpen && (
            <div className="dropdown">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Security</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
        <div className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? <BiArrowToRight /> : <BiArrowToLeft />}
        </div>
      </div>
      <div className="main-content">
        <header>
          <div className="admin_head">
            <BiMenu className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} />
            <h3>Updates</h3>
            <div className="profil">
              <BiMoon onClick={toggleNightMode} style={{ cursor: 'pointer' }} />
              <div className="profil_title">
                <h3>MT</h3>
                <div className="pr_txt">
                  <h4>Miran Team</h4>
                  <p>Meridian Group Of Tx</p>
                </div>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="menu-dropdown">
              <div className="menu-item">
                <AiOutlineHome /> Dashboard
              </div>
              <div className="menu-item">
                <GrUpdate /> Updates
              </div>
              <div className="menu-item" onClick={toggleSettings}>
                <AiFillSetting /> Settings
              </div>
            </div>
          )}
        </header>
        <main>
          <div className="selets">
            <form className="form_admin">
              <div className="input">
                <input type="text" placeholder="Search ..." />
              </div>
             
              <div className="select">
                <select name="" id="">
                  <option value="">Active</option>
                  <option value="">Inactive</option>
                  <option value="">All</option>
                </select>
              </div>
              <div className="input">
                <input type="text" placeholder="Search ..." />
              </div>
              <div className="admin_post_btn">
                <button>Update post</button>
              </div>
            </form>
          </div>
          <div className="table">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px' }}>#</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Company</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Vehicle</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Driver</th>
                  <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid black', padding: '5px' }}>1</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Company A</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Vehicle 1</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Driver A</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>2024-07-16</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
