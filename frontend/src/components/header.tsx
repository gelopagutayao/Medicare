
const header = () => {
  return (
    <header className="bg-white shadow">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div 
              onClick={() => window.location.href='/'} 
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/LOGO.png" alt="Medicare Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">
                <span className="text-[#09637E]">Medi</span>care.
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default header
