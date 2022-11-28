import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const ContestDataEdit = () => {
    const [art_name, set_art_name] = useState('')
    const [art_type, set_art_type] = useState('')
    const [location, set_location] = useState('')
    const [date, set_date] = useState('')
    const [day, set_day] = useState('')
    const [time, set_time] = useState('')
    const [is_finished, set_is_finished] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/contests/${id}`)
      set_art_name(response.data.art_name)
      set_art_type(response.data.art_type)
      set_location(response.data.location)
      set_date(response.data.date)
      set_day(response.data.day)
      set_time(response.data.time)
      set_is_finished(response.data.is_finished)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/contests/${id}`, {
            art_name,
            art_type,
            location,
            date,
            day,
            time,
            is_finished
          })
          navigate('/admin/contest')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE KONTES</h1>
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
                <label className='label'>Apakah Sudah Selesai?</label>
                <div className='control'>
                    <select
                        value={is_finished}
                        onChange={(e) => set_is_finished(e.target.value)}
                        placeholder='Apakah Sudah Selesai?'
                    >
                        <option value="false">Belum</option>
                        <option value="true">Ya</option>
                    </select>
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

export default ContestDataEdit