import React,{useEffect,useState}from 'react';
import axios from'axios';
import{Button}from'react-bootstrap';
function CoursesList(){
    const[Product,setProduct]=useState(
        []);
        useEffect()=>{
            axios.get''
            .then((response=>{
                setProduct(response.data);
            })
            .catch((error=>{
                console.log('Error:',error);
            });
            ))
            return(
                <div>
                    <div className="container mt-5">
                        <h1>Courses list</h1>
                        <div className="row">
                            {Product.map(product)=>(
                                <div className='col-md-4'key={Course.id}>
                                    <div className='card'></div>
                                    <img src={course.image}className='card-img-top'></img>
                                    <div className='card-body-bg-info'>
                                        <h3 className='card-title'>Course Name:{course.name}</h3>
                                        <p className='card-text'>Price:{Course.price}</p>
                                        <Button className='btn btn-success'variant="success"type="submit">Add to Course</Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }

    
}