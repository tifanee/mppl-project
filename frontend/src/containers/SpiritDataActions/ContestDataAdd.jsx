import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const ContestDataAdd = () => {
    const [art_name, set_art_name] = useState('')
    const [art_type, set_art_type] = useState('')
    const [location, set_location] = useState('')
    const [date, set_date] = useState('')
    const [day, set_day] = useState('')
    const [time, set_time] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/contests', {
                art_name,
                art_type,
                location,
                date,
                day,
                time
            })
            navigate('/admin/contest')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH KONTES</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Kontes</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={art_name}
                        onChange={(e) => set_art_name(e.target.value)}
                        placeholder='Nama Kontes'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Jenis Kontes</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={art_type}
                        onChange={(e) => set_art_type(e.target.value)}
                        placeholder='Jenis Kontes'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Lokasi</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={location}
                        onChange={(e) => set_location(e.target.value)}
                        placeholder='Lokasi'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Tanggal</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={date}
                        onChange={(e) => set_date(e.target.value)}
                        placeholder='Tanggal'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Hari</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={day}
                        onChange={(e) => set_day(e.target.value)}
                        placeholder='Hari'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Time</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={time}
                        onChange={(e) => set_time(e.target.value)}
                        placeholder='Time'
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

export default ContestDataAdd