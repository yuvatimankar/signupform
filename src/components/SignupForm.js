import React,{useEffect, useState}from 'react';
import validation from './validation';
const SignupForm = ({submitForm}) =>{

    const [values, setValues]=useState({
        fullname:"",
        email:"",
        address:"",
        contact:"",
        date:"",
    });

    const [errors,setErrors] = useState({});
    const [dataIsCorrect , setDataIsCorrect]= useState(false);
    const handleChange= (event) =>{
        setValues({
            ...values,
            [event.target.name]:event.target.value,
        })
    }
    const handleFormSubmit= (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);
    return (
        <div className="container"> 
            <div className="app-wrapper">
                <div>
                    <h2 className="title"> Create Account </h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                       <label className="label">Full Name</label> 
                       <input 
                       className="input" 
                       type="text" 
                       name="fullname" 
                       value={values.fullname}
                       onChange={handleChange}
                       />
                       {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
                    <div className="email">
                       <label className="label">Email</label> 
                       <input 
                       className="input" 
                       type="text" 
                       name="email" 
                       value={values.email}
                       onChange={handleChange}
                       />
                       {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="address">
                       <label className="label">Address</label> 
                       <input 
                       className="input" 
                       type="text" 
                       name="address" 
                       value={values.address}
                       onChange={handleChange}
                       />
                       {errors.address && <p className="error">{errors.address}</p>}
                    </div>
                    <div className="contact">
                       <label className="label">contact</label> 
                       <input 
                       className="input" 
                       type="tel" 
                       name="contact" 
                       value={values.contact}
                       onChange={handleChange}
                       />
                       {errors.contact && <p className="error">{errors.contact}</p>}
                    </div>
                    <div className="date">
                       <label className="label">date</label> 
                       <input 
                       className="input" 
                       type="date" 
                       name="date" 
                       value={values.date}
                       onChange={handleChange}
                       />
                       {errors.date && <p className="error">{errors.date}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign Up</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default SignupForm;