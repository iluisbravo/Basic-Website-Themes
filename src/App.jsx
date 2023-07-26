import styles from './App.module.css'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'
import SettingsPage from './pages/SettingsPage'
import SidebarComponent from './components/SidebarComponent'
import { Bars3Icon } from '@heroicons/react/24/outline'
import ThemeSwitch from './components/ThemeSwitch'
import { useSelector } from 'react-redux'
import HeaderComponent from './components/HeaderComponent'
import LogoComponent from './components/LogoComponent'


function App() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${styles.app} ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <div className='container'>
        <div className='col-2'>
          <LogoComponent />
        </div>
        <div className='col-10'>
          <HeaderComponent />
        </div>
        <div className='col-2'>
          <SidebarComponent />
        </div>
        <div className='col-10'>
          <div className='container'>
            <Routes>
              <Route path='/Home' element={<HomePage />} />
              <Route path='/Dashboard' element={<DashboardPage />} />
              <Route path='/Account' element={<AccountPage />} />
              <Route path='/Settings' element={<SettingsPage />} />
            </Routes>
          </div>
        </div>
        <div className='col-2'>
        </div>
        <div className='col-10'>
          <div className='box footer'>
            <p>Footer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
