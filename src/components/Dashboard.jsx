import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const weeklyData = [
    { day: 'Tue', value: 68 },
    { day: 'Wed', value: 25 },
    { day: 'Thu', value: 81 },
    { day: 'Fri', value: 53 },
    { day: 'Sat', value: 75 },
    { day: 'Sun', value: 86 },
    { day: 'Mon', value: 52 }
  ];

  const monthlyData = [
    { month: 1, value: 2.5 },
    { month: 5, value: 2.8 },
    { month: 10, value: 3.2 },
    { month: 15, value: 2.9 },
    { month: 20, value: 3.5 },
    { month: 25, value: 2.7 },
    { month: 30, value: 3.1 }
  ];

  const yearlyData = [
    { month: 'Jan', value: 4.2 },
    { month: 'Feb', value: 5.8 },
    { month: 'Mar', value: 2.1 },
    { month: 'Apr', value: 8.5 },
    { month: 'Aug', value: 4.9 },
    { month: 'Sep', value: 3.2 },
    { month: 'Oct', value: 2.8 },
    { month: 'Nov', value: 4.5 },
    { month: 'Dec', value: 9.2 }
  ];

  return (
    <div className="dashboard">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="nav-left">
          <div className="logo">
            <div className="logo-icon">🧠</div>
            <span className="logo-text">Dashboard</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#" className="nav-item">
            <span className="nav-icon">🏠</span>
            Home
          </a>
          <a href="#" className="nav-item active">
            <span className="nav-icon">📊</span>
            Complaints
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💰</span>
            Sales
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📈</span>
            PMS
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📋</span>
            Reporting
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">⚙️</span>
            Settings
          </a>
        </div>
        <div className="nav-right">
          <div className="user-profile">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="profile-img" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="content-header">
          <div className="header-left">
            <h1 className="page-title">
              <span className="title-icon">📊</span>
              Complaints Overview
            </h1>
          </div>
          <div className="header-right">
            <span className="greeting">Hello, Pandu</span>
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="User" className="profile-img" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="action-btn">Import Data</button>
          <button className="action-btn">Export Data</button>
          <button className="action-btn">Logs</button>
          <button className="action-btn">API Settings</button>
        </div>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Left Side - Stats and Charts */}
          <div className="left-section">
            {/* Stats Cards Row 1 */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon">📥</div>
                <h3>In Queue</h3>
                <div className="stat-number">214</div>
                <a href="#" className="view-link">View &gt;</a>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">⏳</div>
                <h3>Pending</h3>
                <div className="stat-number">32</div>
                <a href="#" className="view-link">View &gt;</a>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📋</div>
                <h3>All Complaints</h3>
                <div className="stat-number">1,503</div>
                <a href="#" className="view-link">View &gt;</a>
              </div>
            </div>

            {/* Charts Row */}
            <div className="charts-row">
              {/* Weekly Chart */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>Rolling 7 Days</h3>
                  <div className="chart-dropdown">Rolling 7 Days ▼</div>
                </div>
                <div className="chart-number">486</div>
                <div className="chart-subtitle">53 Complaints per day</div>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart data={weeklyData}>
                      <Bar dataKey="value" fill="#3b82f6" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} fontSize={12} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="chart-highlight">
                    <div className="highlight-box">
                      <div className="highlight-number">81</div>
                      <div className="highlight-date">Thursday 13 Jan '25</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monthly Chart */}
              <div className="chart-card">
                <div className="chart-header">
                  <h3>This Month</h3>
                  <div className="chart-dropdown">January ▽</div>
                </div>
                <div className="chart-number">1,503</div>
                <div className="chart-subtitle">382 Complaints per week</div>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={120}>
                    <LineChart data={monthlyData}>
                      <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Yearly Chart */}
            <div className="yearly-chart">
              <div className="chart-header">
                <h3>This Year</h3>
                <div className="chart-dropdown">2025 ▽</div>
              </div>
              <div className="chart-number">12,439</div>
              <div className="chart-subtitle">864 Complaints per month</div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={120}>
                  <BarChart data={yearlyData}>
                    <Bar dataKey="value" fill="#3b82f6" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Side - Shortcuts */}
          <div className="right-section">
            <div className="shortcuts-panel">
              <h3>Shortcuts</h3>
              <button className="shortcut-btn premium">+ AI Assistant</button>
              
              <div className="shortcut-item">
                <div className="shortcut-icon">📊</div>
                <span>Complaints</span>
              </div>
              
              <div className="shortcut-item">
                <div className="shortcut-icon">📊</div>
                <span>Complaints</span>
              </div>
              
              <div className="shortcut-item">
                <div className="shortcut-icon">📊</div>
                <span>Complaints</span>
              </div>
              
              <div className="shortcut-item">
                <div className="shortcut-icon">📊</div>
                <span>Complaints</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
};

export default Dashboard;