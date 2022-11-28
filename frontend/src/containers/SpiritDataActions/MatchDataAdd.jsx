import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const MatchDataAdd = () => {
    const [sport_name, set_sport_name] = useState('')
    const [dept_name1, set_dept_name1] = useState('')
    const [dept_name2, set_dept_name2] = useState('')
    const [location, set_location] = useState('')
    const [date, set_date] = useState('')
    const [day, set_day] = useState('')
    const [time, set_time] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/matchs', {
                sport_name,
                dept_name1,
                dept_name2,
                location,
                date,
                day,
                time
            })
            navigate('/admin/match')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH PERTANDINGAN</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={sport_name}
                        onChange={(e) => set_sport_name(e.target.value)}
                        placeholder='Nama Olahraga'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Departemen 1</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={dept_name1}
                        onChange={(e) => set_dept_name1(e.target.value)}
                        placeholder='Departemen 1'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Departemen 2</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={dept_name2}
                        onChange={(e) => set_dept_name2(e.target.value)}
                        placeholder='Departemen 2'
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

export default MatchDataAdd