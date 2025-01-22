import React, { useState } from 'react';

function CVBuilder() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isEditingGeneral, setIsEditingGeneral] = useState(true)

  const handleGeneralChange = (e) => {
    const {name, value} = e.target;
    setGeneralInfo(prev => ({
      ...prev, [name]: value
    }))
  }

  const [education, setEducation] = useState([
    {school: '',
    qualification: '',
    date: ''}
  ])
  const [isEditingEducation, setIsEditingEducation] = useState(true)

  const handleEducationChange = (index, e) => {
    const {name, value} = e.target;
    setEducation(prev => {
      const newEducation = [...prev]
      newEducation[index] = {
        ...newEducation[index],
        [name]: value
      }
      return newEducation
    })
  }

  const addEducation = () => {
    setEducation(prev => [...prev, {school:'', qualification:'',date:''}])
  }

  const [work, setWork] =useState([
    {company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',}
  ])
  const [isEditingWork, setIsEditingWork] = useState(true)

  const handleWorkChange =(index,e) => {
    const {name, value} = e.target;
    setWork(prev => {
      const newWork = [...prev];
      newWork[index] = {
        ...newWork[index],
        [name]: value
      }
      return newWork
    })
  }

  const addWork = () => {
    setWork(prev => [...prev, {
      company:'',
      position:'',
      responsibilities:'',
      startDate:'',
      endDate:''
    }])
  }

return (
    <div>
    <h1>CV Builder 2025.</h1>
    <section className="bg-white shadow rounded-lg p-6 mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">General Information</h2>
  {isEditingGeneral ? (
    <div className="space-y-4">
      <input
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="name"
        value={generalInfo.name}
        placeholder="Name"
        onChange={handleGeneralChange}
      />
      <input
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        name="email"
        value={generalInfo.email}
        placeholder="Email"
        onChange={handleGeneralChange}
      />
      <input
        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="tel"
        name="phone"
        value={generalInfo.phone}
        placeholder="Phone"
        onChange={handleGeneralChange}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => setIsEditingGeneral(false)}
      >
        Submit
      </button>
    </div>
  ) : (
    <div>
      <p className="text-gray-700"><strong>Name:</strong> {generalInfo.name}</p>
      <p className="text-gray-700"><strong>Email:</strong> {generalInfo.email}</p>
      <p className="text-gray-700"><strong>Phone:</strong> {generalInfo.phone}</p>
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={() => setIsEditingGeneral(true)}
      >
        Edit
      </button>
    </div>
  )}
</section>


<section className="bg-white shadow rounded-lg p-6 mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
  {isEditingEducation ? (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="school"
            value={edu.school}
            placeholder="School"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="qualification"
            value={edu.qualification}
            placeholder="Qualification"
            onChange={(e) => handleEducationChange(index, e)}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="date"
            value={edu.date}
            placeholder="Date"
            onChange={(e) => handleEducationChange(index, e)}
          />
        </div>
      ))}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={addEducation}
      >
        Add Education
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 ml-4 rounded hover:bg-blue-600"
        onClick={() => setIsEditingEducation(false)}
      >
        Submit
      </button>
    </div>
  ) : (
    <div>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <p className="text-gray-700"><strong>School:</strong> {edu.school}</p>
          <p className="text-gray-700"><strong>Qualification:</strong> {edu.qualification}</p>
          <p className="text-gray-700"><strong>Date:</strong> {edu.date}</p>
        </div>
      ))}
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={() => setIsEditingEducation(true)}
      >
        Edit
      </button>
    </div>
  )}
</section>


<section className="bg-white shadow rounded-lg p-6 mb-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">Work Experience</h2>
  {isEditingWork ? (
    <div className="space-y-6">
      {work.map((job, index) => (
        <div key={index} className="space-y-4 border-b pb-4 mb-4 border-gray-200">
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="company"
            value={job.company}
            placeholder="Company"
            onChange={(e) => handleWorkChange(index, e)}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="position"
            value={job.position}
            placeholder="Position"
            onChange={(e) => handleWorkChange(index, e)}
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="responsibilities"
            value={job.responsibilities}
            placeholder="Responsibilities"
            rows="3"
            onChange={(e) => handleWorkChange(index, e)}
          />
          <div className="flex gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="startDate"
              value={job.startDate}
              onChange={(e) => handleWorkChange(index, e)}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="endDate"
              value={job.endDate}
              onChange={(e) => handleWorkChange(index, e)}
            />
          </div>
        </div>
      ))}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        onClick={addWork}
      >
        Add Work Experience
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 ml-4 rounded hover:bg-blue-600"
        onClick={() => setIsEditingWork(false)}
      >
        Submit
      </button>
    </div>
  ) : (
    <div className="space-y-6">
      {work.map((job, index) => (
        <div key={index} className="space-y-2 border-b pb-4 mb-4 border-gray-200">
          <p className="text-gray-700">
            <strong>Company:</strong> {job.company}
          </p>
          <p className="text-gray-700">
            <strong>Position:</strong> {job.position}
          </p>
          <p className="text-gray-700">
            <strong>Responsibilities:</strong> {job.responsibilities}
          </p>
          <p className="text-gray-700">
            <strong>Period:</strong> {job.startDate} to {job.endDate}
          </p>
        </div>
      ))}
      <button
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        onClick={() => setIsEditingWork(true)}
      >
        Edit
      </button>
    </div>
  )}
</section>

    </div>
  )
}

export default CVBuilder;