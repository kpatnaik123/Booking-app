import React,{useEffect,useState} from 'react';
import './Registerscreen.css';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success'
import Navbar from '../components/Navbar';

function Registerscreen() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [regdno,setregdno]=useState('');
  const [password,setpassword]=useState('');
  const [cpassword,setcpassword]=useState('');

  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();
  const [success,setSuccess]=useState();

  async function register(){
    if(password===cpassword){
        const user={
            name,
            email,
            regdno,
            password,
            cpassword
        }

        try{
            setLoading(true);
            const result=await axios.post('/api/users/register',user).data;
            setLoading(false);
            setSuccess(true);
            
            setname('');
            setemail('');
            setpassword('');
            setregdno('');
            setcpassword('')
        }catch(error){
            console.log(error);
            setLoading(false);
            setError(true);
        }
        console.log(user);
    }
    else{
        alert('passwords do not match');
    }

  }

  return (
    <>
    <Navbar/>
    <div>
        {loading && <Loader/>}
        {error && <Error message={'Something went wrong,please try again later'}/>}
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5 mt-5'>
                {success && <Success message={'Registration Successful'}/>}
                <div className='bs'>
                    <h3 className='accText'>Register</h3>
                    <input type="text" className='form-control' placeholder='name'  value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    <input type="text" className='form-control' placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                    <input type="text" className='form-control' placeholder='regd no' value={regdno} onChange={(e)=>{setregdno(e.target.value)}}/>
                    <input type="password" className='form-control' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                    <input type="password" className='form-control' placeholder='confirm password' value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}/> 
                    <button className='btn btn-primary mt-3' onClick={register}>Register</button>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Registerscreen
