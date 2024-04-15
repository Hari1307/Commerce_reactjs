import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CSS/LoginSignup.css";
export const LoginSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [demoData, setDemoData] = useState("");

  const [isSuccess , setIsSuccess] = useState(false);
  // const history = useHistory();
  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    // const demo = await axios.get("http://localhost:8080/api/v1/auth/hello");
    // setDemoData(demo.data);
  };
  // const submit = async (e) => {
  //   try{
  //     const response = await axios.post(
  //       "http://localhost:8080/api/v1/auth/register",
  //       {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //       }
  //     );
  //       setIsSuccess(true);
  //       setTimeout(()=>{
  //         // history("/")
  //       })
  //     console.log(response.data);
  //   }
  //   catch(error){
      
  //   }
  // };
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>{demoData}</h1>
        <h1>Sign up</h1>
        <div className="fields">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter FirstName"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter LastName"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button >Signup</button>
        </div>
      </div>
    </div>
  );
};
