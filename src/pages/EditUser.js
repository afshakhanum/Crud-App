import React , { useState , useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, editUser } from '../redux/action';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const [state, setState] = useState(
        {
            name: '',
            email: '',
            contact: '',
            address: '',
        }
    );
    let history = useHistory();
    let dispatch = useDispatch();
    const [error, setError] = useState('');
    const {name,email,contact,address} = state ;
    const handleInputChange = (e) => {
        let {name,value} = e.target;
        setState({...state,[name]:value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "" || contact === ""  || address === "" ){
            setError('All fields are required');
        } else {
            dispatch(updateUser(state, id));
            history.push('/');
            setError("");
        }
    }
  let {id} = useParams();
    useEffect(()=>{
        dispatch(editUser(id));
    } , [])

const {user} = useSelector(state => state.data);
    useEffect(()=>{
        if(user){
            setState({...user});
        }
    },[user])
  return (
    <div>
        <h1>Edit User</h1>
        <button onClick={()=>history.push("/")}>Go Back</button>
        {error && <h4 style={{color:"red"}}>{error}</h4>} 
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
       
      <TextField id="filled-basic" label="name" name='name' variant="filled" value={name || ""} type="text" onChange={handleInputChange} />
      <br></br>
      <TextField id="filled-basic" label="email" name='email' variant="filled" value={email || ""} type="email" onChange={handleInputChange} />
      <br></br>
      <TextField id="filled-basic" label="contact" name='contact' variant="filled" value={contact || ""} type="number" onChange={handleInputChange} />
        <br></br>
      <TextField id="filled-basic" label="address" name='address' variant="filled" value={address || ""} type="text" onChange={handleInputChange} />
      <br></br>
      <button type="submit">Update</button>
    </Box>
    </div>
  )
}

export default EditUser