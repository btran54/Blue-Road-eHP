import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-neutral text-neutral-content transition-all duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button className="absolute top-4 right-4 text-2xl" onClick={toggleSidebar}>×</button>
      <ul className="menu p-4 pt-16">
        <li><Link to="/ranking" className="hover:bg-neutral-focus text-lg" onClick={toggleSidebar}>Ranking</Link></li>
        <li><Link to="/updates" className="hover:bg-neutral-focus text-lg" onClick={toggleSidebar}>Updates</Link></li>
        <li><Link to="/contact" className="hover:bg-neutral-focus text-lg" onClick={toggleSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

const Contact = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content font-sans">
      {/* Fixed Hamburger Menu Button and Logo */}
      <div className="fixed top-2 left-4 z-50 flex items-center gap-2">
        <button 
          className="text-2xl btn btn-ghost p-2"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <img src="/images/Azur_Lane_English_Release_Logo.png" alt="Blue Road eHP Logo" className="w-20 h-15" />
      </div>

      {/* Banner */}
      <div className="bg-primary text-primary-content py-4 px-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-8" /> {/* Spacer to balance the layout */}
          <h1 className="text-3xl font-bold flex-grow text-center">Contact</h1>
          
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
          </label>
        </div>
      </div>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content with faded background */}
      <main className="container mx-auto px-4 py-8 flex-grow relative">
        <div 
          className="absolute inset-0 bg-center opacity-30 z-0"
          style={{
            backgroundImage: "url('/images/Blue_Road_Logo.png')",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat"
        }}
        ></div>
        <div className="relative z-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <ul className="space-y-4">
              <li>
                <strong>Mebot</strong>
                <ul className="pl-4">
                  <li>Email: <a href="mailto:mebot2001@gmail.com" className="underline text-blue-500">mebot2001@gmail.com</a></li>
                  <li>Discord: <span className="text-gray-700">@mebot</span></li>
                  <li>GitHub: <a href="https://github.com/Mebot2001" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700">github.com/Mebot2001</a></li>
                </ul>
              </li>
              <li>
                <strong>Bran</strong>
                <ul className="pl-4">
                  <li>Email: <a href="mailto:briantran888@@gmail.com" className="underline text-blue-500">briantran888@gmail.com</a></li>
                  <li>Discord: <span className="text-gray-700">@rolledegg</span></li>
                  <li>GitHub: <a href="https://github.com/btran54" target="_blank" rel="noopener noreferrer" className="underline text-blue-500 hover:text-blue-700">github.com/btran54</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer footer-center p-1 bg-primary text-primary-content">
        <div>
          <img src="/images/Blue_Road_Logo.png" alt="Blue Road eHP Logo" className="w-120 h-60" />
          <p className="font-bold">
            Blue Road eHP Ltd. Co. Inc. LLC. LLP. PLC. Corp. B.V. GmbH. S.A. AG N.V. Pty Ltd. S.r.l. K.K. S.à r.l. Ltda. Oy Sp. z o.o. A/S SpA SA/NV A.G. EEIG K.S. SNC ScS LLLP GbR d.o.o. JSC PBC CIC e.U. OÜ Kt. Rt. K.K.T. <br/>
            Providing reliable Azur Lane data since 2024
          </p> 
        </div> 
      </footer>
    </div>
  );
};

export default Contact;
