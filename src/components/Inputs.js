import React, { useState } from 'react';

const Inputs = (props) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [hobbies, setHobbies] = useState();
    
    return (
        <form className='add-form' onSubmit={props.clickSubmit}>

            <div className='form-control'>
                <label>Name</label>
                    <   input type='text' 
                        placeholder='Add Name'
                        value={name}
                        onClick={(e) => setName(e.target.value)}
                    />
            </div>

            <div className='form-control'>
                <label>Age</label>
                    <   input type='text'
                        placeholder='Add Your Age'
                        value={age}
                        onClick={(e) => setAge(e.target.value)}
                    />
            </div>

            <div className='form-control'>
                <label>Hobbies</label>
                    <   input type='text'
                        placeholder='Add Hobbies'
                        value={hobbies}
                        onClick={(e) => setHobbies(e.target.value)}
                    />
            </div>

            <input type='submit' value='Add Information' 
            className='btn btn-block'/>

        </form>
    )
}

export default Inputs;