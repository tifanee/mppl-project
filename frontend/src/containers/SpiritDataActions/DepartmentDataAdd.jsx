import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './spiritDataActions.css'

const DepartmentDataAdd = () => {
    const [dept_name, set_dept_name] = useState('')
    const [dept_code, set_dept_code] = useState('')
    const [dept_image, set_dept_image] = useState('')
    const [gold_medal_count, set_gold_medal_count] = useState(0)
    const [silver_medal_count, set_silver_medal_count] = useState(0)
    const [bronze_medal_count, set_bronze_medal_count] = useState(0)

    const navigate = useNavigate()

    const saveDepartment = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/api/departments', {
                dept_name,
                dept_code,
                dept_image,
                gold_medal_count,
                silver_medal_count,
                bronze_medal_count
            })
            navigate('/admin/department')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='spirit-container'>
        <div className='spirit__heading'>
          <h1>TAMBAH DEPARTEMEN</h1>
        </div>
        <form onSubmit={saveDepartment} className='spirit-form'>
            <div className='field'>
                <label className='label'>Nama Departemen</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={dept_name}
                        onChange={(e) => set_dept_name(e.target.value)}
                        placeholder='Nama Departemen'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Kode Departemen</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={dept_code}
                        onChange={(e) => set_dept_code(e.target.value)}
                        placeholder='Kode Departemen'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gambar Departemen</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={dept_image}
                        onChange={(e) => e.target.value === ' ' ? set_dept_image('https://i.ibb.co/4436fv8/spirit-department.png') : set_dept_image(e.target.value)}
                        placeholder='Gambar Departemen'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Jumlah Mendali Emas</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={gold_medal_count}
                        onChange={(e) => set_gold_medal_count(e.target.value)}
                        placeholder='Jumlah Mendali Emas'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Jumlah Mendali Perak</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={silver_medal_count}
                        onChange={(e) => set_silver_medal_count(e.target.value)}
                        placeholder='Jumlah Mendali Perak'
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Jumlah Mendali Perunggu</label>
                <div className='control'>
                    <input 
                        type="text" 
                        className='input'
                        value={bronze_medal_count}
                        onChange={(e) => set_bronze_medal_count(e.target.value)}
                        placeholder='Jumlah Mendali Perunggu'
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

export default DepartmentDataAdd