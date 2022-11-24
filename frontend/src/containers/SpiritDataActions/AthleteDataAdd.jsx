import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const AthleteDataAdd = () => {
    const [name, set_name] = useState('')
    const [nim, set_nim] = useState('')
    const [image, set_image] = useState('')
    const [department, set_department] = useState('')
    const [batch, set_batch] = useState('')
    const [sport_team, set_sport_team] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/athletes', {
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
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH ATLET</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Lengkap</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                        placeholder='Nama Lengkap'
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
                <label className='label'>Gambar</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={image}
                        onChange={(e) => set_image(e.target.value)}
                        placeholder='Gambar'
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
                        TAMBAH
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AthleteDataAdd