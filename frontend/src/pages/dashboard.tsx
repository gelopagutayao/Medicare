import { useState } from 'react'
import Sidebar from '../components/sidebar'
import { patients, doctors, appointments, recentActivity, stats, notifications } from '../data/mockData'
import { Users, Calendar, Clock, Stethoscope  } from 'lucide-react'
import Dashboardheader from '../components/dashboardheader'

const dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-64">
        {/* Header */}
        <Dashboardheader />

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-[#09637E]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Patients</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalPatients}</p>
              </div>
              <Users className="w-10 h-10 text-[#09637E]" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Today's Appointments</p>
                <p className="text-2xl font-bold text-gray-800">{stats.todayAppointments}</p>
              </div>
              <Calendar className="w-10 h-10 text-green-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-yellow-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending</p>
                <p className="text-2xl font-bold text-gray-800">{stats.pendingAppointments}</p>
              </div>
              <Clock className="w-10 h-10 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Doctors</p>
                <p className="text-2xl font-bold text-gray-800">{stats.doctorsAvailable}</p>
              </div>
              <Stethoscope className="w-10 h-10 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Appointments Table */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Appointments</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Patient</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Doctor</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.slice(0, 5).map((apt) => (
                    <tr key={apt.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-sm">{apt.patient}</td>
                      <td className="py-3 text-sm">{apt.doctor}</td>
                      <td className="py-3 text-sm">{apt.date}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          apt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Doctors Table */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Our Doctors</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Doctor</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Specialty</th>
                    <th className="text-left py-2 text-sm font-medium text-gray-500">Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doc) => (
                    <tr key={doc.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 text-sm">{doc.name}</td>
                      <td className="py-3 text-sm">{doc.specialty}</td>
                      <td className="py-3 text-sm">{doc.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Patients & Activity */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Patients */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Patients</h2>
            <div className="space-y-3">
              {patients.slice(0, 5).map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#09637E] text-white flex items-center justify-center font-medium">
                      {patient.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{patient.name}</p>
                      <p className="text-sm text-gray-500">{patient.condition}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    patient.status === 'Active' ? 'bg-green-100 text-green-700' : 
                    patient.status === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {patient.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border-b last:border-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#09637E]"></div>
                  <div>
                    <p className="text-sm text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.patient} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard
