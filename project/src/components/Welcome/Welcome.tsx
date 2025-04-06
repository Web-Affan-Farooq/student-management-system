import React from 'react';
import Link from 'next/link';

const Welcome = () => {
  return (
    <section className='relative top-36 content text-white w-[93vw] bg-[rgba(255,255,255,0.1)] rounded-3xl py-[130px] m-auto box-border flex flex-row-reverse flex-nowrap justify-center align-middle gap-[50px] z-10 px-5 max-[855px]:flex-col-reverse max-[855px]:py-[50px] lg:w-3/4'>
        <div className='w-1/2 max-[855px]:w-full max-[855px]:m-auto max-[855px]:text-center'>
        <h1 className='text-4xl leading-[46px] font-bold'>Student Management System</h1>
        <br />
        <p className='text-gray-400'>
            Student Community For<span className='text-link font-semibold'> GIAIC Thursday Class</span>
         </p>
        <br />
        <div className='flex flex-col flex-wrap justify-center items-center gap-5'>
            {/* <Link href={'/new-teacher'}>
            <button type="button" className='px-[17px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Enroll as teacher</button> 
            </Link> */}
        {/* <Link href={'/new-student'}>
        <button type="button" className='px-[17px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Enroll as Student</button> 
        </Link> */}

        <Link href={'/login-student'}>
        <button type="button" className='px-[17px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Student login</button> 
        </Link>

        <Link href={'/login-teacher'}>
        <button type="button" className='px-[17px] py-[8px] rounded-lg bg-dark font-bold active:scale-95 transition-all'>Teacher login</button> 
        </Link>
        </div>
        </div>
        <img src="https://img.freepik.com/premium-photo/generated-illustration-businessman-using-computer-document-management-system_1088754-8790.jpg?ga=GA1.1.323865264.1719582461&semt=ais_hybrid" alt="" className='w-[350px] object-cover max-[855px]:m-auto' />
    </section>  )
}

export default Welcome;