import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const SportTeamDataEdit = () => {
    const [department, set_department] = useState('')
    const [sport_type, set_sport_type] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/sport-teams/${id}`)
      set_department(response.data.department)
      set_sport_type(response.data.sport_type)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/sport-teams/${id}`, {
              department,
              sport_type
          })
          navigate('/admin/sport-team')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE TIM OLAHRAGA</h1>
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
                <label className='label'>Olagraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={sport_type}
                        onChange={(e) => set_sport_type(e.target.value)}
                        placeholder='Olagraga'
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

export default SportTeamDataEdit