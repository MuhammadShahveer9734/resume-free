import { ResumeData } from './ResumeBuilder'
import Image from 'next/image'

interface ResumePreviewProps {
  data: ResumeData
  photoUrl?: string
}

export default function ResumePreview({ data, photoUrl }: ResumePreviewProps) {
  return (
    <div id="resume-preview" className="bg-white shadow-lg w-full max-w-4xl mx-auto">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-white">
          <div className="bg-[#3498db] h-40"></div>
          <div className="p-6">
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt="Profile"
                width={200}
                height={200}
                className="rounded-lg mb-6 -mt-20 border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-[200px] h-[200px] bg-gray-200 rounded-lg mb-6 -mt-20 border-4 border-white shadow-lg" />
            )}
            <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Contact</h3>
              <div className="space-y-2 text-sm">
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">{data.address}</p>
                <p className="font-semibold mt-2">Phone:</p>
                <p className="text-gray-600">{data.phone}</p>
                <p className="font-semibold mt-2">Email:</p>
                <p className="text-gray-600">{data.email}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Skills</h3>
              <div className="text-sm text-gray-600 whitespace-pre-line">
                {data.skills}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-2/3 p-6 pt-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Professional Summary</h3>
            <p className="text-sm text-gray-600">{data.summary}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Work Experience</h3>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {data.experience}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Education</h3>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {data.education}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-[#3498db] pb-2 mb-3">Languages</h3>
            <div className="text-sm text-gray-600 whitespace-pre-line">
              {data.languages}
            </div>
          </div>
        </div>
      </div>
      <div className="h-8 bg-[#3498db]"></div>
    </div>
  )
}

