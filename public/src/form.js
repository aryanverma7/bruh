import axios from "axios"
import {useState} from "react"
import {ToastContainer} from "react-toastify"
import {toast} from "react-toastify"
import { registerRoute } from "./utils/apiroutes"

import 'react-toastify/dist/ReactToastify.css'




const Form = () => {

	const [userData, setUserData] = useState({
		UserName : "",
		Email_Id : "",
		Phone_Number : "",
		Password : "",
		Confirm_Password : ""
	})
	const handleChange = (event) => {
		setUserData({...userData, [event.target.name]: event.target.value})
		
	}

	const handleSubmit = async(event) => {
		event.preventDefault()
		if(Validation()){
			const {UserName, Email_ID, Phone_Number, Password} = userData
			const data = await axios.post(registerRoute,{
				UserName,
				Email_ID,
				Phone_Number,
				Password
			})
			if(!data.data.status){
				toast.error(data.data.msg,toastoptions)
			}
			console.log(data.data.status);
		}
		
	}
	const Validation = () => {
		const {UserName, Email_ID, Phone_Number, Password, Confirm_Password} = userData
		if(UserName.length > 10) {
			toast.error("Username should have length less than or equal to 10!", toastoptions)
			return false
		}
		if(!Email_ID.includes("@gmail.com")) {
			toast.error("Email should include @gmail.com", toastoptions)
			return false
		}
		if(Phone_Number.length !== 10) {
			toast.error("Phone number should be of 10 digits only!", toastoptions)
			return false
		}
		if(!Password >= 8) {
			toast.error("Password should have atleast 8 characters!", toastoptions)
			return false
		}
		if(Confirm_Password !== Password) {
			toast.error("Input does not matches the Password entered before!🤣", toastoptions)
			return false
		}
		return true
	}

	const toastoptions = {
		position: "top-left",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark"
	}

	return (
		<div>
			<h1> Register </h1>
			<form onSubmit={(e) => handleSubmit(e)}> 
				<input name="UserName" placeholder="UserName" required onChange={(e) => handleChange(e)} />
				<input name="Email_ID" placeholder="Email ID" required onChange={(e) => handleChange(e)} />
				<input name="Phone_Number" placeholder="Phone Number  (Optional)" onChange={(e) => handleChange(e)} />
				<input name="Password" type="text" placeholder="Password" required onChange={(e) => handleChange(e)} /> 
				<input name="Confirm_Password" type="text" placeholder="Confirm Password" required onChange={(e) => handleChange(e)} />
				<button> Submit </button>

			</form>
			<ToastContainer/>
		</div>
	)
}

export default Form