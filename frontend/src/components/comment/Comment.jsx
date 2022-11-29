import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './comment.css'

const SportDataAdd = ({id}) => {
    const [showForm, setShowForm] = useState(false);
    const [username, set_username] = useState('')
    const [comment, set_comment] = useState('')
    const [match_id, set_match_id] = useState(id)

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/students', {
                username,
                comment,
                match_id
            })
            window.location.reload(false)
        } catch (error) {
            console.log(error)
        }
    }

    let form = (
        <form onSubmit={onSubmit} className='spirit-formx'>
            <div className='fieldx'>
                <label className='label'>Siapa kamu?</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='inputx'
                        value={username}
                        onChange={(e) => set_username(e.target.value)}
                        placeholder='Siapa kamu?'
                    />
                </div>
            </div>
            <div className='fieldx'>
                <label className='label'>Isi komentar</label>
                <div className='control'>
                    <textarea 
                        type="text" 
                        className='inputx'
                        value={comment}
                        onChange={(e) => set_comment(e.target.value)}
                        placeholder='Isi komentar'
                        rows={4}
                    />
                </div>
            </div>
            <div className='fieldx'>
                <div className='control'>
                    <button type='submit' className='spirit__add-button'>
                        Post
                    </button>
                </div>
            </div>
        </form>
    )

    if (showForm === false) {
        form = <div></div>;
    }

    return (
        <div className='spirit-container'>
            <div className='spirit__heading comment-margin'>
                <h1>KOMENTAR & DUKUNGAN</h1>
            </div>
            <div className="comment-buttonx" onClick={() => setShowForm(true)}>
                <h2>Tulis Komentar atau Dukungan</h2>
            </div>
            {form}
        </div>
    )
}

export default SportDataAdd