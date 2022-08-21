import React, {useState} from 'react';
import './App.css';

const Form = () => {
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState(values => ({...values, [name]: value}))
        (value)
            
    }
    const resetInputField = () => {
        
      };
    const [fdata, setState]= useState([0]);
    const [records, setRecord]= useState([])

    const  handleSubmit = (event)=>{
        event.preventDefault();
        // console.log(Name,dob,Email,sex,mobile,govtid,gud,address ,state, city,country, pin , occup , religion , ms ,bg);
        const newRecord={...fdata}
        setRecord([...records,newRecord]);
        setState({ Name: "" ,dob:"",email:"",sex:"",mobile:"",govtid:"",gudi:"",address:"" ,state:"", city:"",country:"", pin:"" , occup :"", religion:"" , ms:"" ,bg:""});
        event.preventDefault();
    };

  return (
    <>
    <form  onSubmit={handleSubmit}>
    <div className='form' >
        <div className="ab">s
            <h3>PERSONAL DETAILS</h3>
    
                <label >Name *</label>
                <input name='Name' type="text" value={fdata.firstName} onChange = {handleInputChange} id="firstName" required placeholder="Enter Name"/>
                
                <label >Date of Birth * </label>
                <input  type={"date"} name="dob" value={fdata.dob} onChange = {handleInputChange} id="dob" required/>
                
                <label >Sex </label>
                <select name='sex' onChange = {handleInputChange} value={fdata.sex} id="sex">
                    <option> </option>
                    <option>Female</option>
                    <option>Male</option>
                </select> 
                <br></br>
                <label > Mobile </label>
                <input name='mobile' type={"number"} value={fdata.mobile} onChange = {handleInputChange} id="mobile" placeholder="Enter Mobile"/>
                
                <label >Govt issued ID </label>
                <input name='govtid'  type="text" value={fdata.govtid} onChange = {handleInputChange} id="govtid" placeholder="ID Type"/>

            </div>
            <div className="ab">
                <h3>CONTACT DETAILS</h3>
                <label>Guardian Details</label>
                <select>
                <option>Mr.</option>
                <option>Ms.</option>
                </select>
                <input type="text" name="gudi" value={fdata.gudi} placeholder="Enter Guardian Name"></input>
                <label>Email </label>
                <input  type="email" id="email" name='email' value={fdata.email} onChange = {handleInputChange} placeholder="Email"/>
                <br></br>
                <label>Emergency Number</label>
                <input type={"number"}  placeholder="Enter Emergency Num"></input>
            
            </div>
            <div className="ab">
                <h3>ADDRESS DETAILS</h3>
                <label >Address </label>
                <input  type="text" id="address" name='address' value={fdata.address}  onChange = {handleInputChange} placeholder="Enter Address"/>
            
                <label>State</label>
                <select placeholder='Enter state' name='state' id='state' value={fdata.state}  onChange = {handleInputChange}>
                    <option></option>
                    <option>Andhra Pradesh</option>
                    <option>Madhya Pradesh</option>
                    <option>Goa</option>
                    <option>Telangana</option>
                    <option>Tamilnadu</option>
                </select>

                <label>City</label>
                <select placeholder='Enter city'name='city' onChange = {handleInputChange} id="city" value={fdata.city}>
                    <option></option>
                    <option>Khammam</option>
                    <option>Mahabubabad</option>
                    <option>Hyderabad</option>
                    <option>Warangal</option>
                    <option>karimnagar</option>
                </select>

                <br></br>
                <label>Country </label>
                <select placeholder='Enetr Country'name='country' onChange = {handleInputChange} id="country" value={fdata.country}>
                    <option></option>
                    <option>India</option>
                    <option>China</option>
                    <option>Russia</option>
                </select>

                <label >Pincode </label>
                <input  type="number" id="pincode" name='pin' value={fdata.pin}  onChange = {handleInputChange} placeholder="pincode"/>
                           
            </div>
            <div className='ab'>
                <h3>OTHER DETAILS</h3>
                <label>Occupation</label>
                <input type={"text"} value={fdata.occup} name="occup" onChange = {handleInputChange} id='occupation' placeholder='Enter Occupation'></input>
            
                <label>Religion</label>
                <select value={fdata.religion} name="religion" id="religion" onChange = {handleInputChange}>
                    <option></option>
                    <option>Urdu</option>
                    <option>Telugu</option>
                    <option>Muslim</option>
                    <option>English</option>
                </select>

                <label>Marital Status</label>
                <select name='ms' onChange = {handleInputChange} value={fdata.ms} id="ms" >
                    <option></option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widow</option>
                </select>

                <br></br>
                <label>Blood Group</label>
                <select name='bg' onChange = {handleInputChange} value={fdata.bg} id="bg" >
                    <option></option>
                    <option>A</option>
                    <option>B</option>
                    <option>B+</option>
                    <option>A+</option>
                    <option>O</option>
                </select>
                <label>Nationality </label>
                <select  placeholder='Enetr Country' onChange = {handleInputChange}>
                    <option></option>
                    <option>India</option>
                    <option>China</option>
                    <option>Russia</option>
                </select>
            </div>
            <br></br>
            <div class="footer">
                
                <button onClick={resetInputField}>Clear</button>
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
        </form>
        <br/>
     <div className='result'>
         <br/>
         {
             records.map((currElem)=>{
                 return (
                    <div className='data'>
                         <p><b> Name : </b> {currElem.Name}  ||  <b>Date of Birth :</b>{currElem.dob}  ||  <b>Sex:</b> {currElem.sex}  ||  <b>mobile :</b>{currElem.mobile} ||  <b>govtid :</b>{currElem.govtid} </p> 
                         <p><b>Guardian :</b>{currElem.gudi} ||   <b>Email :</b>{currElem.email} </p>
                         <p><b>address :</b>{currElem.address}  ||  <b>country :</b>{currElem.country}  ||  <b>state :</b>{currElem.state}  ||  <b>city :</b>{currElem.city}  ||  <b>pin :</b>{currElem.pin}  </p>
                         <p><b>occupation :</b>{currElem.occup}  ||  <b>religion :</b>{currElem.religion}  ||  <b>marrital Status :</b>{currElem.ms}  ||  <b>blood group: </b>{currElem.bg} ||  <b>Nationality:</b>{currElem.country}  </p>
                    </div>
                 )
             })
         }
        <br/>
     </div>
        
    </>
  )
}

export default Form