import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const AdminDataAdd = () => {
    const [name, set_name] = useState('')
    const [nim, set_nim] = useState('')
    const [department, set_department] = useState('')
    const [batch, set_batch] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/register', {
                name,
                nim,
                department,
                batch,
                email,
                password
            })
            navigate('/admin/admin')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH ADMIN</h1>
        </div>
        <form onSubmit={onSubmit} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                        placeholder='Nama Lengkap'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>NIM</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={nim}
                        onChange={(e) => set_nim(e.target.value)}
                        placeholder='NIM'
                    />
                </div>
            </div>
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
                <label className='label'>Angkatan</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={batch}
                        onChange={(e) => set_batch(e.target.value)}
                        placeholder='Angkatan'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input 
                        type="email" 
                        className='input'
                        value={email}
                        pattern='.+@apps\.ipb\.ac\.id'
                        onChange={(e) => set_email(e.target.value)}
                        placeholder='Email'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                    <input 
                        type="password" 
                        className='input'
                        value={password}
                        onChange={(e) => set_password(e.target.value)}
                        placeholder='Password'
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

export default AdminDataAdd