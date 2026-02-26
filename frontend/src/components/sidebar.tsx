import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Users, Calendar, Stethoscope, Settings, LogOut, FileText, Activity } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Patients', path: '/dashboard/patients' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/appointments' },
    { icon: Stethoscope, label: 'Doctors', path: '/dashboard/doctors' },
    { icon: FileText, label: 'Medical Records', path: '/dashboard/records' },
    { icon: Activity, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ]

  return (
    <nav className="bg-[#09637E] text-white w-64 min-h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-t border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/LOGO.png" alt="Medicare" className="w-8 h-8" />
          <span className="text-2xl font-bold"><span>Medi</span>care.</span>
        </Link>
      </div>

      {/* Menu */}
      <ul className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <Link 
          to="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </Link>
      </div>
    </nav>
  )
}

export default Sidebar
