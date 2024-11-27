"use client";
import React, { useState } from 'react';

const NewTeacher = () => {
  const [password, setpassword] = useState<string>("");

  const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value);
  };

  return (
    <main>
      <article>
        <section>
        <form action="/Teacher" className='text-white flex flex-col flex-nowrap gap-5 justify-center items-center w-full h-screen'>
        <div>
            <h1 className='text-center text-white font-bold text-[34px]'>Teacher Selection Form</h1>
          </div>
          <fieldset className='bg-[rgba(255,255,255,0.1)] flex flex-col flex-nowrap rounded-lg px-[20px] py-[50px] gap-6 w-[600px] justify-center items-center max-md:w-[400px] max-sm:w-[90vw]'>
            <label htmlFor="Your name" id='teacher-name'>
              <input type="text" name='teacherName' id='teacher-name' required placeholder='Enter your name' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
            </label>

            <label htmlFor="Enter your age" id='teacher-age'>
              <input type="text" name='teacherAge' id='teacher-age' required placeholder='Enter your age' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Enter your phonenumber" id='teacher-phonenumber'>
              <input type="tel" name='teacherPhonenumber' id='teacher-phonenumber' required placeholder='Enter your phonenumber' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Enter your email">
              <input type="email" name='teacherEmail' id='teacher-email' required placeholder='Enter your email' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Set username">
              <input type="text" name='teacherUsername' id='teacher-username' required placeholder='Set username to your account' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Set password" id='teacher-account-password'>
              <input type="password" name='teacherAccountPassword' id='teacher-account-password' required placeholder='Set password to your account' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              ' onChange={handlePassword}/>
              </label>

              <input type="text" className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              ' value={password} onChange={() => {}}/>

              <button type="submit" className='px-[17px] w-[200px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Enroll as teacher</button> 
          </fieldset>
        </form>
        </section>
      </article>
    </main>
  )
}

export default NewTeacher;