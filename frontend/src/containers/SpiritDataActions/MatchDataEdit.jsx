import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const MatchDataEdit = () => {
    const [sport_name, set_sport_name] = useState('')
    const [dept_name1, set_dept_name1] = useState('')
    const [dept_name2, set_dept_name2] = useState('')
    const [location, set_location] = useState('')
    const [date, set_date] = useState('')
    const [day, set_day] = useState('')
    const [time, set_time] = useState('')
    const [is_finished, set_is_finished] = useState('')
    const [score_result, set_score_result] = useState([])

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/matchs/${id}`)
      set_sport_name(response.data.sport_name)
      set_dept_name1(response.data.dept_name1)
      set_dept_name2(response.data.dept_name2)
      set_location(response.data.location)
      set_date(response.data.date)
      set_day(response.data.day)
      set_time(response.data.time)
      set_is_finished(response.data.is_finished)
      set_score_result(response.data.score_result)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/matchs/${id}`, {
            sport_name,
            dept_name1,
            dept_name2,
            location,
            date,
            day,
            time,
            is_finished,
            score_result
          })
          navigate('/admin/match')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE PERTANDINGAN</h1>
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
                <label className='label'>Hasil</label>
                <div className='control-container'>
                    {score_result?.map((result, index) => (
                        <div className='control' key={index}>
                            <input 
                                type="text" 
                                className='input'
                                value={result}
                                onChange={(e) => {const updResult = [...score_result]; updResult[index] = e.target.value; set_score_result(updResult)}}
                                placeholder='Hasil'
                            />
                        </div>
                    ))}
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

export default MatchDataEdit