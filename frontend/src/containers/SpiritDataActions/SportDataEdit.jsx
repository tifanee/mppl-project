import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const SportDataEdit = () => {
    const [sport_name, set_sport_name] = useState('')
    const [sport_image, set_sport_image] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/sports/${id}`)
      set_sport_name(response.data.sport_name)
      set_sport_image(response.data.sport_image)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/sports/${id}`, {
              sport_name,
              sport_image
          })
          navigate('/admin/sport')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE OLAHRAGA</h1>
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
                <label className='label'>Gambar Olahraga</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={sport_image}
                        onChange={(e) => e.target.value === ' ' ? set_sport_image('https://i.ibb.co/YLp0RrW/spirit-sport.png') : set_sport_image(e.target.value)}
                        placeholder='Gambar Olahraga'
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

export default SportDataEdit