import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const ArticleDataEdit = () => {
    const [title, set_title] = useState('')
    const [author, set_author] = useState('')
    const [body, set_body] = useState('')
    const [cover_image, set_cover_image] = useState('')
    const [is_published, set_is_published] = useState('')
    const [created_date, set_created_date] = useState('')
    const [published_date, set_published_date] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/articles/${id}`)
      set_title(response.data.title)
      set_author(response.data.author)
      set_body(response.data.body)
      set_cover_image(response.data.cover_image)
      set_is_published(response.data.is_published)
      set_created_date(response.data.created_date)
      set_published_date(response.data.published_date)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/articles/${id}`, {
            title,
            author,
            body,
            cover_image,
            is_published,
            created_date,
            published_date
          })
          navigate('/admin/article')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE ARTIKEL</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
        <div className='field'>
                <label className='label'>Judul</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={title}
                        onChange={(e) => set_title(e.target.value)}
                        placeholder='Judul'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Penulis</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={author}
                        onChange={(e) => set_author(e.target.value)}
                        placeholder='Penulis'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Isi Artikel</label>
                <div className='control'>
                    <textarea 
                        type="text" 
                        className='input'
                        value={body}
                        onChange={(e) => set_body(e.target.value)}
                        placeholder='Isi Artikel'
                        rows={12}
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gambar Artikel</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={cover_image}
                        onChange={(e) => e.target.value === ' ' ? set_cover_image('https://i.ibb.co/5vmkKc7/spirit-article.png') : set_cover_image(e.target.value)}
                        placeholder='Penulis'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Tangal Dibuat</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={created_date}
                        onChange={(e) => set_created_date(e.target.value)}
                        placeholder='Tangal Dibuat'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Tanggal Dipublis</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={published_date}
                        onChange={(e) => set_published_date(e.target.value)}
                        placeholder='Tanggal Dipublis'
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

export default ArticleDataEdit