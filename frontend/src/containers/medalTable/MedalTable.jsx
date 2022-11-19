import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './medalTable.css'

import { Medals } from '../../components/index'

const MedalTable = () => {

  const [departments, setDepartment] = useState([])

  useEffect(() => {
    getDepartments()
  }, [])

  const getDepartments = async () => {
    const response = await axios.get('http://localhost:8000/departments')
    setDepartment(response.data)
  }

  return (
    <div className='spirit__content section__padding' id='medalTable'>
        <div className='spirit__heading'>
          <h1>KLASEMEN</h1>
        </div>
        <div className='spirit__klasemen_medalTable-result'>
            <div className='spirit__klasemen_medalTable-heading'>
                <div className='spirit__klasemen-departments_container'>
                    <p>Department</p>
                </div>
                <div className='spirit__klasemen-medals_container'>
                    <p>Gold</p>
                    <p>Silver</p>
                    <p>Bronze</p>
                    <p>Total</p>
                </div>
            </div>
            {departments.sort((a, b) => (b.gold_medal_count - a.gold_medal_count)).map((data) => (
                <Medals data={data} key={data._id} />
            ))}
        </div>
    </div>
  )
}

export default MedalTable