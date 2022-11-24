import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const SportDataAdd = () => {
    const [department, set_department] = useState('')
    const [sport_type, set_sport_type] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/sport-teams', {
                department,
                sport_type,
            })
            navigate('/admin/sport-team')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH TIM OLAHRAGA</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
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
                <label className='label'>Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={sport_type}
                        onChange={(e) => set_sport_type(e.target.value)}
                        placeholder='Olahraga'
                    />
                </div>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type='submit' className='spirit__add-button'>
                        Tambah
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SportDataAdd