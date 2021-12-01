// Import Firestore database
import { db } from '../App.js';
import { useState } from 'react';
// import './read.css';

const Read = () => {

	const [info , setInfo] = useState([]);

	// Start the fetch operation as soon as
	// the page loads
	window.addEventListener('load', () => {
		Fetchdata();
	});

	// Fetch the required data using the get() method
	const Fetchdata = ()=>{
		db.collection("Reviews").get().then((querySnapshot) => {
			
			// Loop through the data and store
			// it in array to display
			querySnapshot.forEach(element => {
				var Reviews = element.Reviews();
				setInfo(arr => [...arr , Reviews]);
				
			});
		})
	}
	
	// Display the result on the page
	return (
		<div>
			<center>
			<h2>Student Details</h2>
			</center>
		
		{
			info.map((Reviews) => (
			<Frame type={Reviews.SoftwareType}
				name={Reviews.SoftwareName}
				ratings={Reviews.Ratings}/>
			))
		}
		</div>

	);
}

// Define how each display entry will be structured
const Frame = ({type , name , ratings}) => {
	console.log(type + " " + name + " " + ratings);
	return (
		<center>
			<div className="div">
				
<p>NAME : {name}</p>

				
<p>Age : {ratings}</p>

				
<p>Course : {type}</p>

			</div>
		</center>
	);
}

export default Read;

