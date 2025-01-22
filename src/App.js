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
    responsibilies: '',
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
      responsibilies:'',
      startDate:'',
      endDate:''
    }])
  }

return (
    <div>
    <h1>CV Builder 2025.</h1>
    <section>
      <h2>General Information</h2>
      <input
       type='text'
       name='name'
       value={generalInfo.name}
       placeholder='Name'
       onChange={handleGeneralChange} />
      <input
       type='email'
       name='email'
       value={generalInfo.email  }
       placeholder='Email'
       onChange={handleGeneralChange} />
      <input 
       type='tel'
       name='phone'
       value={generalInfo.phone}
       placeholder='Phone'
       onChange={handleGeneralChange} />
    </section>
    <section>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <input
          type='text'
          name='school'
          value={edu.school}
          placeholder='School'
          onChange={(e) => handleEducationChange(index,e)} />
          <input 
          type='text'
          name='qualification'
          value={edu.qualification}
          placeholder='Qualification'
          onChange={(e) => handleEducationChange(index,e)} />
          <input
          type='text'
          name='date'
          value={edu.date}
          placeholder='Date'
          onChange={(e) => handleEducationChange(index, e)} />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
      </section>
      <section>
        <h2>Work Experience</h2>
        {work.map((job,index) => (
          <div key={index}>
            <input
            type='text'
            name='company'
            value={job.company}
            placeholder='Company'
            onChange={(e) => handleWorkChange(index, e)} />
            <input 
            type='text'
            name='position'
            value={job.position}
            placeholder='Position'
            onChange={(e) => handleWorkChange(index, e)} />
            <input 
            type='text'
            name='responsibilities'
            value={job.responsibilies}
            placeholder='Responsibilities'
            onChange={(e) => handleWorkChange(index, e)} />
            <input
            type='date'
            name='startDate'
            value={job.startDate}
            placeholder='Start Date'
            onChange={(e) => handleWorkChange(index, e)} />
            <input
            type='date'
            name='endDate'
            value={job.endDate}
            placeholder='End Date'
            onChange={(e) => handleWorkChange(index, e)} />
          </div>
        ))}
        <button onClick={addWork}>Add Work</button>
      </section>
  
    </div>
  )
}

export default CVBuilder;