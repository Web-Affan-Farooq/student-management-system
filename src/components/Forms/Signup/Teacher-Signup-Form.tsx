import React from 'react'
import Link from 'next/link'
const Form = () => {
  return (
    <>
          <form action="/Student" className='text-white flex flex-col flex-nowrap gap-5 justify-center items-center w-full h-auto'>
            <div className='flex flex-col flex-nowrap justify-center items-center gap-2'>
              <h1 className='text-center text-white font-bold text-[34px]'>Create Account</h1>
              <label htmlFor="Check your email for credentials">
                <p className='text-[15px] text-gray-400'>Already have an account? <Link href={"/"} className='text-link font-bold'>Login</Link></p>
              </label>
            </div>

            <fieldset className='bg-[rgba(255,255,255,0.1)] flex flex-col flex-nowrap rounded-lg px-[20px] py-[50px] gap-6 w-[600px] justify-center items-center max-md:w-[400px] max-sm:w-[90vw]'>
              <label htmlFor="Enter your name" className='flex flex-col flex-wrap justify-center items-start gap-2' id='teacher-name'>
                <p className='text-[15px] text-gray-300'>Enter your name :</p>
                <input type="text" name='teacherName' id='teacher-name' required className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Enter your email" className='flex flex-col flex-wrap justify-center items-start gap-2' id='teacher-email'>
                <p className='text-[15px] text-gray-300'>Enter your email (only gmail acceptable) :</p>
                <input type="email" name='teacherEmail' id='teacher-email' required className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>

              </label>
              <label htmlFor="Enter your phonenumber" className='flex flex-col flex-wrap justify-center items-start gap-2' id='teacher-phonenumber'>
                <p className='text-[15px] text-gray-300'>Enter phonenumber:</p>
                <input type="tel" name='teacherPhonenumber' id='teacher-phonenumber' required className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>


              <label htmlFor="Set a password" className='flex flex-col flex-wrap justify-center items-start gap-2' id='teacher-account-password'>
                <p className='text-[15px] text-gray-300'>Set a password:</p>
                <input type="password" name='teacherAccountPassword' id='teacher-account-password' required className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <label htmlFor="Confirmation password" className='flex flex-col flex-wrap justify-center items-start gap-2' id='confirmation-password'>
                <p className='text-[15px] text-gray-300'>Confirmation password check:</p>
                <input type="password" id='confirmation-password' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/>
              </label>

              <div className='w-[300px]'>
                <label htmlFor="Select course" className='flex flex-col flex-wrap justify-center items-start gap-2' id='select-course'>
                  <p className='text-[15px] text-gray-300'>Select courses:</p>
                  {/* <input type="password" id='confirmation-password' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/> */}
              <div className='bg-dark p-[10px] rounded-md'>
              <div className='w-[300px] flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>HTML CSS and Javascript :</span><input type="checkbox" name='course' value={"HTML CSS nad Javascript"} />
                  </div>
                  <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>Python programming:</span><input type="checkbox" name='course' value={"HTML CSS nad Javascript"} />
                  </div>
              </div>

                </label>
              </div>

              <div className='w-[300px]'>
                <label htmlFor="Select batches" className='flex flex-col flex-wrap justify-center items-start gap-2' id='select-batches'>
                  <p className='text-[15px] text-gray-300'>Select batches:</p>
                  {/* <input type="password" id='confirmation-password' className='px-[20px] py-[10px] bg-dark w-[300px] rounded-md
              '/> */}
              <div className='bg-dark p-[10px] rounded-md w-[300px]'>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>Batch-1 :</span><input type="checkbox" name='batches' value={"Batch-1"} />
                  </div>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>Batch-2 :</span><input type="checkbox" name='batches' value={"Batch-2"} />
                  </div>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>Batch-3 :</span><input type="checkbox" name='batches' value={"Batch-3"} />
                  </div>
              <div className='flex flex-row flex-nowrap justify-start items-center gap-2'>
                    <span>Batch-4 :</span><input type="checkbox" name='batches' value={"Batch-4"} />
                  </div>
              </div>

                </label>
              </div>



              {/* <div className='w-[300px]'>
                <label htmlFor="Select batch" className='flex flex-col flex-wrap justify-center items-start gap-2' id='select-batch'>
                  <p className='text-[15px] text-gray-300'>Select batch:</p>
              <select name="batch" id="select-batch" className='bg-dark p-[10px] rounded-md w-full'>
                <option value="Batch-1" className='bg-black'>Batch-1</option>
                <option value="Batch-2" className='bg-black'>Batch-2</option>
                <option value="Batch-3" className='bg-black'>Batch-3</option>
                <option value="Batch-4" className='bg-black'>Batch-4</option>
              </select>
                </label>
              </div> */}
              <br />
              <button type="submit" className='px-[17px] w-[200px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Enroll as teacher</button>
            </fieldset>
          </form>
    </>
  )
}

export default Form