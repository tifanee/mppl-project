import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const ArtDataEdit = () => {
    const [art_name, set_art_name] = useState('')
    const [art_image, set_art_image] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/arts/${id}`)
      set_art_name(response.data.art_name)
      set_art_image(response.data.art_image)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/arts/${id}`, {
              art_name,
              art_image
          })
          navigate('/admin/art')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE SENI</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Seni</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={art_name}
                        onChange={(e) => set_art_name(e.target.value)}
                        placeholder='Nama Seni'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gambar Seni</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={art_image}
                        onChange={(e) => e.target.value === ' ' ? set_art_image('https://i.ibb.co/ZX4Dy2r/spirit-art.png') : set_art_image(e.target.value)}
                        placeholder='Gambar Seni'
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

export default ArtDataEdit