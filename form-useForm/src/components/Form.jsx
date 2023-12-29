import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form"



const Form = () => {

  const {register,handleSubmit,watch,reset,formState:{errors , isSubmitSuccessful ,isSubmitted}} = useForm()
  console.log("errors: ", errors);

  console.log(watch());
  const formSubmitHandler = (data)=>{
    toast.success("Form Submitted",{
      theme:'dark'
    })
    console.log("data: ", data);
    
 }
  return (
    <div className='form-container'>

      <fieldset>
        <legend>
          Fill This Form
        </legend>
        <form onSubmit={handleSubmit((formSubmitHandler))}>
        <ToastContainer />

      {  isSubmitSuccessful &&  <div className='success'>
            <p>Registration Succesfull</p>
          </div>}

          <label >First Name:</label>
          <input type="text" name='firstName' {
            ...register("firstName",
            {required : "Please enter your First Name",
            minLength:{
              value:4,
              message:"Minimum 4 char required"
            },
            maxLength:{
              value:8,
              message:"Maximum 8 char required"
            }

            
            }
            ) 
            }/>
            <p className='err'>{errors.firstName?.message}</p>

          <label >Last Name:</label>
          <input type="text" name='lastName' {
            ...register("lastName",
            {required : "Please enter your Last Name",
            minLength:{
              value:4,
              message:"Minimum 4 char required"
            }

            }

            )

        }/>
            <p className='err'>{errors.lastName?.message}</p>
 

          <label >Email:</label>
          <input type="email" name='email' {
            ...register("email",
            {required : "Please enter your email"

            }
            )


        }/>
            <p className='err'>{errors.email?.message}</p>




          <label >Password:</label>
          <input type="password" name='password' {
            ...register("password",
            {required : "Please enter your password",
            minLength:{
              value:8,
              message:"Minimum 8 char required"
            },
            pattern:{
              value:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
              message:"Password Not Valid"
            }

            }
            )


        }/>
            <p className='err'>{errors.password?.message}</p>


          <input type="submit" value={"Register"} />

          <button className='reset' onClick={()=>{
            reset()
          }}> Reset</button>

        </form>
      </fieldset>
      
    </div>
  )
}

export default Form