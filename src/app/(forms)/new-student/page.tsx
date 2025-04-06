import React from 'react'

const NewStudent = () => {
  return (
    <main className='bg-custom_1 w-full h-screen'>
      <article>
        <section>
        <form action="/Student" className='text-white w-full h-screen'>
        <div>
            {/* <h1 className='text-left text-white font-bold text-[34px]'>Create Account :</h1> */}
          </div>
          <fieldset className='bg-[rgba(255,255,255,0.1)] flex flex-col flex-nowrap rounded-lg px-[20px] py-[50px] gap-6 w-[600px] justify-center items-center max-md:w-[400px] max-sm:w-[90vw]'>

            <label htmlFor="Your name" id='student-name'>
              <input type="text" name='studentName' id='student-name' required placeholder='Enter your name' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
            </label>

            <label htmlFor="Enter your age" id='student-age'>
              <input type="text" name='studentAge' id='student-age' required placeholder='Enter your age' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Enter your phonenumber" id='student-phonenumber'>
              <input type="tel" name='studentPhonenumber' id='student-phonenumber' required placeholder='Enter your phonenumber' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Enter your email">
              <input type="email" name='studentEmail' id='student-email' required placeholder='Enter your email' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Set username">
              <input type="text" name='studentUsername' id='student-username' required placeholder='Set username to your account' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Set password" id='student-account-password'>
              <input type="password" name='studentAccountPassword' id='student-account-password' required placeholder='Set password to your account' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>
              <button type="submit" className='px-[17px] w-[200px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Enroll as student</button> 
          </fieldset>
        </form>
        </section>
      </article>
    </main>
  )
}

export default NewStudent;