import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/username.module.css"
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

export default function Username() {
  
  const formik = useFormik({
        initialValues : {
          username:''          //whenever the we enter the username ,the values passed here 
        },
        validate:usernameValidate,
        validateOnBlur:false,         //validate user text button only when clicking submit button
        validateOnChange:false,
        onSubmit: async values =>{
            console.log(values);
        }

  });
  
  
  return (
    <div className="container mx-auto  ">

       <Toaster position='top-center' reverseOrder={false}></Toaster>

       <div className='flex flex-col justify-center items-center h-screen'>
         <div className={styles.glass}>

          <div className='title flex flex-col items-center'>
          <h4 className='text-5xl font-bold'>Hello Again!🐧</h4>
          <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
            Explore more by connecting with us!
          </span>
         </div>

         <form className='py-1 onSubmit={formik.handleSubmit}'>
              
            <div className='textBox flex flex-col items-center gap-6'>
                
                 <input {...formik.getFieldProps('username') } type='text' className={styles.textBox} placeholder='username'/>
                  <button className={styles.btn} type='submit'>Let's Go</button>

              </div>

              <div className='text-center py-5'>
               <span>Not a Member? <Link className="text-red-500" to='/register'>Register Now</Link></span>

              </div>

         </form>

         </div>
       </div>
    </div>
  )
}
