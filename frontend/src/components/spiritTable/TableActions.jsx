import React, {useState, useEffect} from 'react'
import './spiritTable.css'

import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const TableActions = ({data, location}) => {

  const navigate = useNavigate()

  const [spiritData, setSpiritData] = useState([])

  useEffect(() => {
    getSpiritData()
  }, [])

  const getSpiritData = async () => {
    const response = await axios.get(location.url)
    setSpiritData(response.data)
  }

  const deleteSpiritData = async (id) => {
    try {
      await axios.delete(location.url + `/${id}`)
      getSpiritData()
      window.location.reload(false)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='admin__actions'>
        <div className='admin__button'>
            <div className='admin__edit-button'>
              <Link to={`/admin` + location.route + `/edit/${data._id}`} key={data._id}>
                <button>Edit</button>
              </Link>
            </div>
            <div  className='admin__delete-button'>
                <button onClick={() => deleteSpiritData(data._id)}>Delete</button>
            </div>     
        </div>
    </div>
  )
}

export default TableActions