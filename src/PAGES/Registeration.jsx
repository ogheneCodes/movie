import React from 'react'

import '../CSS/Registration.css'
function Registeration() {
  return (
    <>
        <main>
            <h1>Register Here</h1>
            <form>
                <label htmlFor='firstname'> First Name</label>
                <input type='text' name='firstname' />
                <label htmlFor='lastname'> Last Name</label>
                <input type='text' name='lastname'/>
                <br />
                <label htmlFor='email'> Email</label>
                <input type='email' name='email'/>
                <label htmlFor='phone'> Phone Number</label>
                <input type='text' name='phone'/>
                <br />
                <label htmlFor='address'> Address</label>
                <input type='address' name='address'/>
                <label htmlFor='userType'> User Type</label>
                <input type='number' name='userType'/>
                <br />
                <input type="submit"/>
            </form>
        </main>
    </>
  )
}

export default Registeration
