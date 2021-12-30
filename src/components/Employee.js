import React, { useState } from 'react'
import './Style.css'

export const Employee = () => {
    const [data, setData] = useState(
        {
            username: "",
            department: "",
            rating: ""
        }
    )
    const [newRecord, setNewRecord] = useState([])
    const HandleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({ ...data, [name]: value })
        console.log(data)
    }
    const HandleSubmit = (e) => {
        e.preventDefault()
        const newData = { ...data, id: new Date().getTime().toString() }
        setNewRecord([...newRecord, newData])
        console.log(data)

        setData({
            username: "",
            department: "",
            rating: ""
        })
    }
    console.log(data)
    return (
        <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form action='' onSubmit={HandleSubmit} >
                <div className='card'>
                    <label htmlFor='username'>Name </label>
                    <br />
                    <input type="text" name='username' id='username' value={data.username} onChange={HandleInput} />
                </div>
                <div className='card'>
                    <label htmlFor='department'>Department </label>
                    <br />
                    <input type="text" name='department' id='department' value={data.department} onChange={HandleInput} />
                </div>
                <div className='card'>
                    <label htmlFor='rating'>Rating </label>
                    <br />
                    <input type="number" name='rating' id='rating' value={data.rating} onChange={HandleInput} />
                </div>

                <button type="submit">Submit</button>
            </form>
            <div className ="parent">
                {
                    newRecord.map((CurElem) => {
                        const { id, username, department, rating } = CurElem;
                        return (
                            <div key={id} className='child'>
                                <span>Name : {username} | </span>
                                <span>Department : {department} | </span>
                                <span>Rating : {rating}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
