import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const AthleteDataEdit = () => {
    const [name, set_name] = useState('')
    const [nim, set_nim] = useState('')
    const [image, set_image] = useState('')
    const [department, set_department] = useState('')
    const [batch, set_batch] = useState('')
    const [sport_team, set_sport_team] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
        const response = await axios.get(`http://localhost:8000/api/athletes/${id}`)
        set_name(response.data.name)
        set_nim(response.nim)
        set_image(response.data.image)
        set_department(response.department)
        set_batch(response.batch)
        set_sport_team(response.sport_team)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/athletes/${id}`, {
            name,
            nim,
            image,
            department,
            batch,
            sport_team
          })
          navigate('/admin/athlete')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE ATLET</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                        placeholder='Nama Olahraga'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>NIM</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={nim}
                        onChange={(e) => set_nim(e.target.value)}
                        placeholder='NIM'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gambar Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={image}
                        onChange={(e) => set_image(e.target.value)}
                        placeholder='Gambar Olahraga'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Departemen</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={department}
                        onChange={(e) => set_department(e.target.value)}
                        placeholder='Departemen'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Angkatan</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={batch}
                        onChange={(e) => set_batch(e.target.value)}
                        placeholder='Angkatan'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={sport_team}
                        onChange={(e) => set_sport_team(e.target.value)}
                        placeholder='Olahraga'
                    />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type='submit' className='spirit__add-button'>
                        UPDATE
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AthleteDataEdit