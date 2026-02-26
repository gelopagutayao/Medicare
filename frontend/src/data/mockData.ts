export const patients = [
  { id: 1, name: "John Smith", age: 45, gender: "Male", phone: "+1 234 567 8901", email: "john.smith@email.com", address: "123 Oak Street, NY", bloodType: "O+", condition: "Diabetes", status: "Active" },
  { id: 2, name: "Sarah Johnson", age: 32, gender: "Female", phone: "+1 234 567 8902", email: "sarah.j@email.com", address: "456 Pine Ave, LA", bloodType: "A+", condition: "Hypertension", status: "Active" },
  { id: 3, name: "Michael Brown", age: 58, gender: "Male", phone: "+1 234 567 8903", email: "m.brown@email.com", address: "789 Elm Rd, CHI", bloodType: "B+", condition: "Heart Disease", status: "Critical" },
  { id: 4, name: "Emily Davis", age: 28, gender: "Female", phone: "+1 234 567 8904", email: "emily.d@email.com", address: "321 Maple Dr, SF", bloodType: "AB-", condition: "Healthy", status: "Active" },
  { id: 5, name: "Robert Wilson", age: 67, gender: "Male", phone: "+1 234 567 8905", email: "r.wilson@email.com", address: "654 Cedar Ln, BOS", bloodType: "O-", condition: "Arthritis", status: "Stable" },
  { id: 6, name: "Lisa Anderson", age: 41, gender: "Female", phone: "+1 234 567 8906", email: "lisa.a@email.com", address: "987 Birch St, SEA", bloodType: "A-", condition: "Asthma", status: "Active" },
  { id: 7, name: "David Martinez", age: 55, gender: "Male", phone: "+1 234 567 8907", email: "d.martinez@email.com", address: "147 Walnut Ave, ATL", bloodType: "B-", condition: "High Cholesterol", status: "Stable" },
  { id: 8, name: "Jennifer Taylor", age: 36, gender: "Female", phone: "+1 234 567 8908", email: "j.taylor@email.com", address: "258 Spruce Rd, DEN", bloodType: "O+", condition: "Migraine", status: "Active" },
];

export const doctors = [
  { id: 1, name: "Dr. Amanda White", specialty: "Cardiologist", experience: "15 years", phone: "+1 111 111 1111", email: "a.white@medicare.com", availability: "Mon-Fri", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Dr. James Chen", specialty: "Neurologist", experience: "12 years", phone: "+1 111 111 1112", email: "j.chen@medicare.com", availability: "Mon-Wed", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Dr. Maria Garcia", specialty: "Pediatrician", experience: "10 years", phone: "+1 111 111 1113", email: "m.garcia@medicare.com", availability: "Tue-Sat", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, name: "Dr. Robert Lee", specialty: "Orthopedic", experience: "18 years", phone: "+1 111 111 1114", email: "r.lee@medicare.com", availability: "Mon-Fri", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { id: 5, name: "Dr. Susan Miller", specialty: "Dermatologist", experience: "8 years", phone: "+1 111 111 1115", email: "s.miller@medicare.com", availability: "Wed-Sun", image: "https://randomuser.me/api/portraits/women/90.jpg" },
];

export const appointments = [
  { id: 1, patient: "John Smith", doctor: "Dr. Amanda White", specialty: "Cardiologist", date: "2026-02-27", time: "09:00 AM", status: "Confirmed", type: "Follow-up" },
  { id: 2, patient: "Sarah Johnson", doctor: "Dr. James Chen", specialty: "Neurologist", date: "2026-02-27", time: "10:30 AM", status: "Pending", type: "Consultation" },
  { id: 3, patient: "Michael Brown", doctor: "Dr. Maria Garcia", specialty: "Pediatrician", date: "2026-02-28", time: "11:00 AM", status: "Confirmed", type: "Emergency" },
  { id: 4, patient: "Emily Davis", doctor: "Dr. Robert Lee", specialty: "Orthopedic", date: "2026-02-28", time: "02:00 PM", status: "Confirmed", type: "Check-up" },
  { id: 5, patient: "Robert Wilson", doctor: "Dr. Susan Miller", specialty: "Dermatologist", date: "2026-03-01", time: "09:30 AM", status: "Pending", type: "Follow-up" },
  { id: 6, patient: "Lisa Anderson", doctor: "Dr. Amanda White", specialty: "Cardiologist", date: "2026-03-01", time: "03:00 PM", status: "Confirmed", type: "Consultation" },
];

export const recentActivity = [
  { id: 1, action: "New patient registered", patient: "David Martinez", time: "2 hours ago" },
  { id: 2, action: "Appointment completed", patient: "Jennifer Taylor", time: "4 hours ago" },
  { id: 3, action: "Medical report uploaded", patient: "Michael Brown", time: "5 hours ago" },
  { id: 4, action: "Appointment scheduled", patient: "Robert Wilson", time: "Yesterday" },
  { id: 5, action: "Prescription renewed", patient: "Sarah Johnson", time: "Yesterday" },
];

export const stats = {
  totalPatients: 1248,
  todayAppointments: 18,
  pendingAppointments: 5,
  doctorsAvailable: 12,
};

export const notifications = [
  { id: 1, message: "New appointment request from John Smith", time: "10 min ago", read: false },
  { id: 2, message: "Lab results ready for Sarah Johnson", time: "1 hour ago", read: false },
  { id: 3, message: "Appointment cancelled by Michael Brown", time: "2 hours ago", read: true },
  { id: 4, message: "Dr. James Chen is on leave tomorrow", time: "3 hours ago", read: true },
];
