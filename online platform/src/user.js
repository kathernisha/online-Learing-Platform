import React ,{useState}from'react'
import {Button} from'react-bootstrap'
import From from 'react-bootstrap/Form';
import{useNavigate}from 'react-router-dom';
function Login(){
    let move=useNavigate();
    const[login,setLogin]=useState({
        username:"",
        password:""
    })
    function handleChange(e){
        const{name,value}=e.target,
        setLogin(prevData=>({
            [name]:value
        }))
        function handleSubmit(){
            if(login.username==='Nisha'&&
            login.password=='kather'){
                return.move('/form')
            }
            else{
                alert("Enter the correct username and password")
            }
        }
        return(
            <div>
                <h1 className='m-3'>Admin Login Page</h1>
                <Form className='m-5'>
                    Form.Group className="mb-3"
                    controlid="UserName">
                    <Form.label>USER NAME</Form.label>
                    <Form.Control type="text"placeholder="UserName"value={login.username}
                    name="username"onchange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-4"controlld="Password">
                        <Form.label>PASSWORD</Form.label>
                        <Form.Control type="text"placeholder="Password"value={login.password}name="password"
                        value={login.password}
                        name="password"onChange={handleChange}/>
                        
                        </Form.Group>
                        <Button variant='info'type='button' onclick={handleSubmit}>Submit</Button>
                        

                
                    
                    </div>
                </Form>
            
        )
    }
}
export default Login;