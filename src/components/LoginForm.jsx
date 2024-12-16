import { useState } from "react";

const LoginForm = () => {
    let [formData, setFormData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : ''
    });

    const handleChange = (event)=>{
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name] : value
        });
    }

    const handleLogin = (event)=>{
        event.preventDefault();
        
        const {firstName, lastName, email, password} = formData;
        alert(`${firstName} ${lastName} ${email} ${password}`);
    }

    return <>
        <div className="d-flex flex-column justify-content-center align-content-center h-100">
            <form action="/" method="post" onSubmit={handleLogin} className="w-50 d-flex flex-column justify-content-center align-items-center p-3 gap-2">
                <input value={formData.firstName} name="firstName" type="text" onChange={handleChange} className="form-control" placeholder="First Name" />
                <input value={formData.lastName} name="lastName" type="text" onChange={handleChange} className="form-control" placeholder="Last Name" />
                <input value={formData.email} name="email" type="email" onChange={handleChange} className="form-control" placeholder="Email" />
                <input value={formData.password} name="password" type="password" onChange={handleChange} className="form-control" placeholder="Password" />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </>
}

export default LoginForm;