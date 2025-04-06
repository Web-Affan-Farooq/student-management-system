import React from 'react'

const Form = () => {
  return (
    <>
          <form action="/Teacher" className='text-white flex flex-col flex-nowrap gap-5 justify-center items-center w-full h-screen'>
      <div className='flex flex-col flex-nowrap justify-center items-center gap-2'>
          <h1 className='text-center text-white font-bold text-[34px]'>Teacher Login</h1>
          <label htmlFor="Check your email for credentials">
          <p className='text-[15px] text-gray-400'>Check your email for credentials</p>
          </label>
        </div>

        <fieldset className='bg-[rgba(255,255,255,0.1)] flex flex-col flex-nowrap rounded-lg px-[20px] py-[50px] gap-6 w-[600px] justify-center items-center max-md:w-[400px] max-sm:w-[90vw]'>

        <label htmlFor="Teacher id" id='teacher-id'>
            <input type="text" name='teacherId' id='teacher-id' required placeholder='Teacher ID :' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
            '/>
            </label>

            <label htmlFor="Enter your email">
            <input type="email" name='teacherEmail' id='teacher-email' required placeholder='Email :' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
            '/>
            </label>


            <label htmlFor="Enter password" id='teacher-account-password'>
            <input type="password" name='teacherAccountPassword' id='teacher-account-password' required placeholder='Password :' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
            '/>
            </label>

            <button type="submit" className='px-[17px] w-[200px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Login</button> 
        </fieldset>
      </form>
      </>
  )
}

export default Form