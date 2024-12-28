// 'use client'

// import { useState } from 'react'
// import ResumeForm from './ResumeForm'
// import ResumePreview from './ResumePreview'
// import { Button } from '@/components/ui/button'

// import html2pdf from 'html2pdf.js'


// export interface ResumeData {
//   name: string
//   email: string
//   phone: string
//   address: string
//   summary: string
//   experience: string
//   education: string
//   skills: string
//   languages: string
// }

// export default function ResumeBuilder() {
//   const [resumeData, setResumeData] = useState<ResumeData>({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     summary: '',
//     experience: '',
//     education: '',
//     skills: '',
//     languages: '',
//   })
//   const [photoUrl, setPhotoUrl] = useState<string>('')

//   const handleFormChange = (newData: Partial<ResumeData>) => {
//     setResumeData((prevData) => ({ ...prevData, ...newData }))
//   }

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0]
//     if (file) {
//       const url = URL.createObjectURL(file)
//       setPhotoUrl(url)
//     }
//   }
   

//   const handleDownloadPDF = () => {
//     const element = document.getElementById('resume-preview')
//     const opt = {
//       margin: 0,
//       filename: 'professional_resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
     
//     }
//     html2pdf().set(opt).from(element).save()
//   }
 

//   return (
//     <div className="flex flex-col lg:flex-row gap-8">
//       <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-[#3498db] mb-4">Enter Your Details</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Profile Photo
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-md file:border-0
//               file:text-sm file:font-semibold
//               file:bg-[#3498db] file:text-white
//               hover:file:bg-blue-600"
//           />
//         </div>
//         <ResumeForm data={resumeData} onChange={handleFormChange} />
//         <Button 
//           onClick={handleDownloadPDF} 
//           className="w-full mt-6 bg-[#3498db] hover:bg-blue-600"
//         >
//           Download PDF
//         </Button>
//       </div>
//       <div className="w-full lg:w-1/2">
//         <h2 className="text-2xl font-bold text-[#3498db] mb-4">Resume Preview</h2>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <ResumePreview data={resumeData} photoUrl={photoUrl} />
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client';

// import { useState, useEffect } from 'react';
// import ResumeForm from './ResumeForm';
// import ResumePreview from './ResumePreview';
// import { Button } from '@/components/ui/button';

// export interface ResumeData {
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   summary: string;
//   experience: string;
//   education: string;
//   skills: string;
//   languages: string;
// }

// export default function ResumeBuilder() {
//   const [resumeData, setResumeData] = useState<ResumeData>({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//     summary: '',
//     experience: '',
//     education: '',
//     skills: '',
//     languages: '',
//   });
//   const [photoUrl, setPhotoUrl] = useState<string>('');
//   const [html2pdf, setHtml2pdf] = useState<any>(null);

//   // Dynamically load html2pdf.js to avoid SSR issues
//   useEffect(() => {
//     import('html2pdf.js').then((module) => {
//       setHtml2pdf(module.default);
//     });
//   }, []);

//   const handleFormChange = (newData: Partial<ResumeData>) => {
//     setResumeData((prevData) => ({ ...prevData, ...newData }));
//   };

//   const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setPhotoUrl(url);
//     }
//   };

//   const handleDownloadPDF = () => {
//     if (!html2pdf) {
//       console.error('html2pdf.js is not loaded yet.');
//       return;
//     }

//     const element = document.getElementById('resume-preview');
//     const opt = {
//       margin: 0,
//       filename: 'professional_resume.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };

//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-8">
//       <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-[#3498db] mb-4">Enter Your Details</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Profile Photo
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//             className="block w-full text-sm text-gray-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-md file:border-0
//               file:text-sm file:font-semibold
//               file:bg-[#3498db] file:text-white
//               hover:file:bg-blue-600"
//           />
//         </div>
//         <ResumeForm data={resumeData} onChange={handleFormChange} />
//         <Button
//           onClick={handleDownloadPDF}
//           className="w-full mt-6 bg-[#3498db] hover:bg-blue-600"
//         >
//           Download PDF
//         </Button>
//       </div>
//       <div className="w-full lg:w-1/2">
//         <h2 className="text-2xl font-bold text-[#3498db] mb-4">Resume Preview</h2>
//         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <ResumePreview data={resumeData} photoUrl={photoUrl} />
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import { Button } from '@/components/ui/button';

export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
  languages: string;
}

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    languages: '',
  });
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [html2pdf, setHtml2pdf] = useState<typeof import('html2pdf.js') | null>(null);

  // Dynamically load html2pdf.js to avoid SSR issues
  useEffect(() => {
    import('html2pdf.js').then((module) => {
      setHtml2pdf(module.default);
    });
  }, []);

  const handleFormChange = (newData: Partial<ResumeData>) => {
    setResumeData((prevData) => ({ ...prevData, ...newData }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoUrl(url);
    }
  };

  const handleDownloadPDF = () => {
    if (!html2pdf) {
      console.error('html2pdf.js is not loaded yet.');
      return;
    }

    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 0,
      filename: 'professional_resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#3498db] mb-4">Enter Your Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Photo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-[#3498db] file:text-white
              hover:file:bg-blue-600"
          />
        </div>
        <ResumeForm data={resumeData} onChange={handleFormChange} />
        <Button
          onClick={handleDownloadPDF}
          className="w-full mt-6 bg-[#3498db] hover:bg-blue-600"
        >
          Download PDF
        </Button>
      </div>
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold text-[#3498db] mb-4">Resume Preview</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <ResumePreview data={resumeData} photoUrl={photoUrl} />
        </div>
      </div>
    </div>
  );
}
