import { ResumeData } from './ResumeBuilder'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

interface ResumeFormProps {
  data: ResumeData
  onChange: (newData: Partial<ResumeData>) => void
}

export default function ResumeForm({ data, onChange }: ResumeFormProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({ [name]: value })
  }

  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" value={data.name} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" value={data.email} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" value={data.phone} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" value={data.address} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea id="summary" name="summary" value={data.summary} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="experience">Work Experience</Label>
        <Textarea 
          id="experience" 
          name="experience" 
          value={data.experience} 
          onChange={handleInputChange} 
          required 
          placeholder="Example:
04/2017 - 03/2023
Technical Project Manager
- Led cross-functional teams
- Managed project timelines and deliverables"
        />
      </div>
      <div>
        <Label htmlFor="education">Education</Label>
        <Textarea 
          id="education" 
          name="education" 
          value={data.education} 
          onChange={handleInputChange} 
          required 
          placeholder="Example:
2011 - 2015
Bachelor of Science in Computer Science
University Name"
        />
      </div>
      <div>
        <Label htmlFor="skills">Skills</Label>
        <Textarea id="skills" name="skills" value={data.skills} onChange={handleInputChange} required />
      </div>
      <div>
        <Label htmlFor="languages">Languages</Label>
        <Textarea 
          id="languages" 
          name="languages" 
          value={data.languages} 
          onChange={handleInputChange} 
          required 
          placeholder="Example:
English - C1
Spanish - B2"
        />
      </div>
    </form>
  )
}

