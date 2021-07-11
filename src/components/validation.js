const validation = (values) =>{

    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.address){
        errors.address="Address is required."
    }
    if(!values.contact){
        errors.contact="Number is required."
    }else if(values.contact.length>10){
        errors.contact="contact should not be more than 10 characters."
    }
    if(!values.date){
        errors.date="Date is required."
    }
    return errors;
};

export default validation;