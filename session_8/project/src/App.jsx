import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Create } from './components/Create';
import { Remove } from './components/Remove';

function App() {

  // 고정 메뉴
  const fixedMenus = ['Create', 'Remove'];

  // 동적 메뉴
  const [menus, setMenus] = useState(['HTML', 'CSS', 'JS']);

  // 활성 메뉴
  const [activeMenu, setActiveMenu] = useState('Create');

  // 메뉴 추가 함수 (동적 메뉴만 추가)
  const handleCreateMenu = (title) => {
    if (
      fixedMenus.includes(title) ||
      menus.includes(title)
    ) return; // 중복 방지
    setMenus([...menus, title]);
  };

  // 메뉴 삭제 함수 (동적 메뉴만 삭제)
  const handleRemoveMenu = (title) => {
    setMenus(menus.filter(menu => menu !== title));
  };

  // 메뉴 클릭 핸들러
  const handleMenuClick = (menu) => {
    if (fixedMenus.includes(menu)) {
      setActiveMenu(menu);
    }
  };

  // Nav에 표시할 전체 메뉴
  const allMenus = [...fixedMenus, ...menus];

  return (
    <div className="App">
      <Header text="ERICA × React Props State"/>
      <Nav menus={allMenus} activeMenu={activeMenu} onMenuClick={handleMenuClick}/>
      {activeMenu === 'Create' && <Create onCreateMenu={handleCreateMenu}/>}
      {activeMenu === 'Remove' && <Remove onRemoveMenu={handleRemoveMenu}/>}
    </div>
  );
}

export default App;
