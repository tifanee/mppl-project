import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'
import logoLarge from '../../assets/logo-large.png'

const Login = () => {

    const [data, setData] = useState({
        email:'',
        password:''
    })
    const navigate =useNavigate()
    const [error, setError] = useState('')

    const handleChange = ({ currentTarget: input}) => {
        setData({ ...data, [input.name]: input.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = 'http://localhost:8000/api/login'
            const { data: res } = await axios.post(url, data)
            localStorage.setItem('isAuthenticated', true)
            navigate('/admin/home')
            console.log(res.message)
        } catch (error) {
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
                setError(error.response.data.message);
                setTimeout(() => {setError('')}, 3000)
			}
        }
    }

    return (
        <div className='login'>
            <div className='spirit-name'>
                <div className='dekorasi'/>
                <div className='spirit-design'>
                    <h1 className='spr'>SPR</h1>
                    <h1 className='i'>I</h1>
                    <h1>R</h1>
                    <h1 className='i'>I</h1>
                    <h1>T</h1>
                </div>
                <p>Departemen Matematika dan Ilmu Pengerahuan Alam</p>
            </div>
            <div className='spirit-container' >
                <div className='spirit__heading'>
                    <h1>MASUK</h1>
                </div>
                <form 
                    onSubmit={handleSubmit} 
                    className='spirit-form login-form'>
                    {error && <div className='error_msg'>{error}</div>}
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control'>
                            <input 
                                type="text" 
                                className='input'
                                value={data.email}
                                onChange={handleChange}
                                placeholder='Email'
                                name='email'
                                required
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Password</label>
                        <div className='control'>
                            <input 
                                type="password" 
                                className='input'
                                value={data.password}
                                onChange={handleChange}
                                placeholder='Password'
                                name='password'
                                required
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button type='submit' className='spirit__add-button'>
                                MASUK
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login