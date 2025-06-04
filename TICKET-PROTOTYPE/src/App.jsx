import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyDetailsPage from './components/pages/MyDetailsPage';
import CreateTicketPage from './components/pages/CreateTicketPage';
import UserDashboard from './components/pages/UserDashboard';
import ViewTicketsPage from './components/pages/ViewTicketsPage';
import TicketDetailPage from './components/pages/TicketDetailPage';
import EditDetailsPage from './components/pages/EditDetailsPage';
import LoginPage from './components/pages/LoginPage';
import AdminTicketDetailPage from './components/pages/admin/AdminTicketDetailPage';
import AdminUsersPage from './components/pages/admin/AdminUsersPage';
import AdminAgentsPage from './components/pages/admin/AdminAgentsPage';
import AdminReportsPage from './components/pages/admin/AdminReportsPage';
import AdminSettingsPage from './components/pages/admin/AdminSettingsPage';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import AdminTicketsPage from './components/pages/admin/AdminTicketsPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* User routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<UserDashboard />} />
        <Route path="/create-ticket" element={<CreateTicketPage />} />
        <Route path="/my-details" element={<MyDetailsPage />} />
        <Route path="/edit-details" element={<EditDetailsPage />} />
        <Route path="/view-tickets" element={<ViewTicketsPage />} />
        <Route path="/ticket/:id" element={<TicketDetailPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/ticket/:id" element={<AdminTicketDetailPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/agents" element={<AdminAgentsPage />} />
        <Route path="/admin/reports" element={<AdminReportsPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
        <Route path="/admin/tickets" element={<AdminTicketsPage />} />
      </Routes>
    </Router>
  );
}

export default App;