import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import './spiritDataActions.css'

const AdminDataEdit = () => {
    const [name, set_name] = useState('')
    const [nim, set_nim] = useState('')
    const [department, set_department] = useState('')
    const [batch, set_batch] = useState('')
    const [email, set_email] = useState('')
    const [password, set_password] = useState('')
    const [is_superAdmin, set_is_superAdmin] = useState('')
    const [is_admin, set_is_admin] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
      getById()
    }, [])
  
    const getById = async () => {
      const response = await axios.get(`http://localhost:8000/api/admins/${id}`)
      set_name(response.data.name)
      set_nim(response.data.nim)
      set_department(response.data.department)
      set_batch(response.data.batch)
      set_email(response.data.email)
      set_password(response.data.password)
      set_is_superAdmin(response.data.is_superAdmin)
      set_is_admin(response.data.is_admin)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.patch(`http://localhost:8000/api/admins/${id}`, {
            name,
            nim,
            department,
            batch,
            email,
            password,
            is_superAdmin,
            is_admin
          })
          navigate('/admin/admin')
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='spirit-container' >
        <div className='spirit__heading'>
          <h1>UPDATE ADMIN</h1>
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
                <label className='label'>Apakah user adalah super admin?</label>
                <div className='control'>
                    <select
                        value={is_superAdmin}
                        onChange={(e) => set_is_superAdmin(e.target.value)}
                        placeholder='Apakah Sudah Selesai?'
                    >
                        <option value="false">Tidak</option>
                        <option value="true">Ya</option>
                    </select>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Apakah user adalah admin?</label>
                <div className='control'>
                    <select
                        value={is_admin}
                        onChange={(e) => set_is_admin(e.target.value)}
                        placeholder='Apakah Sudah Selesai?'
                    >
                        <option value="false">Tidak</option>
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

export default AdminDataEdit