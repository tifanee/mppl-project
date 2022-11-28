import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const Register = () => {
    const [name, set_name] = useState('')
    const [nim, set_nim] = useState('')
    const [department, set_department] = useState('')
    const [batch, set_batch] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')

    const navigate = useNavigate()

    const saveAdmin = async (e) => {
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
            console.log({status: 'ok'})
            navigate('/admin/login')
        } catch (error) {
            console.log({message: error.message, error:'Duplicate Email'})
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>DAFTAR</h1>
        </div>
        <form onSubmit={saveAdmin} className='spirit-form'>
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
                <p>email@apps.ipb.ac.id</p>
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
                        minLength="6"
                    />
                </div>
                <p>Password harus 6 karakter atau lebih</p>
            </div>
            <div className='field'>
                <div className='control'>
                    <button type='submit' className='spirit__add-button'>
                        DAFTAR
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register
