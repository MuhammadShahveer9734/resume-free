import ResumeBuilder from "./components/ResumeBuilder";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
       
          <h1 className="text-4xl font-bold text-[#3498db] mb-2">Professional Resume Builder</h1>
          <p className="text-xl text-gray-600">Create a beautiful, professional resume in minutes <span>Made by M.Shahveer</span></p>
        </header>
        <ResumeBuilder />
      </div>
    </main>
  )
}

