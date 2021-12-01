import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../App.js';
import Navbar from "../Navbar/Navbar.js";
import { Link } from 'react-router-dom';


export default function ReviewForm(props) {
    const [value, setValue] = React.useState(0);
    const largeStyles = {
        iconButton: {
          width: 240,
          height: 240,
          padding: 30
        },
        icon: {
          width: 60,
          height: 60
        }
      };
      const MyRating = ({ classes }) => (
        <Rating
          value={value}
          max={5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onClick={props.handleInputChange}
          classes={classes}
        />
      );
      const LargeRating = withStyles(largeStyles)(MyRating);

      const [SoftwareName, setSoftwareName] = useState('')
      const [SoftwareType, setSoftwareType] = useState('')
      const [Positives, setPositives] = useState('')
      const [Negatives, setNegatives] = useState('')
      const [Tips, setTips] = useState('')
      const [Tags, setTags] = useState('')
      const [Comments, setComments] = useState('')

      const handleSubmit = async (e) => {
        e.preventDefault()

        if(SoftwareName && SoftwareName && Positives && Negatives && value){
          console.log(SoftwareName, SoftwareType, Positives, Negatives, Tips, Tags, Comments, value)
        }
        const docRef = await addDoc(collection(db, "Reviews"), {
          /*timestamp: severTimestamp(),*/
          SoftwareName: SoftwareName,
          SoftwareType: SoftwareType,
          Postives: Positives,
          Negatives: Negatives,
          Tags: Tags,
          Tips: Tips,
          AdditionalComments: Comments,
          Ratings: value
        });
        console.log("Document written with ID: ", docRef.id);
      }



    return (
      <div><Navbar />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div>
            <div class="BigSignIn">
                <h2>Write a Review</h2>
            </div>
            <LargeRating />
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
            
            <TextField
            required
            onChange={(e) => setSoftwareName(e.target.value)}
            id="outlined-required"
            label="Software Name"
            helperText="Enter the name of the product you want to review"
            />

            <TextField
            required
            onChange={(e) => setSoftwareType(e.target.value)}
            id="outlined-required"
            label="Software Type"
            helperText="Enter the type of softwaer ex: Accounting, Marketings, etc."
            />

            <TextField
            required
            onChange={(e) => setPositives(e.target.value)}
            id="outlined-multiline-static-required"
            label="Positives (+)"
            multiline
            rows={4}
            helperText="Enter positive aspects of the software"
            />

            <TextField
            required
            onChange={(e) => setNegatives(e.target.value)}
            id="outlined-multiline-required"
            label="Negatives (-)"
            multiline
            rows={4}
            helperText="Enter negative aspects of the software"
            />
            
            <TextField
            onChange={(e) => setTips(e.target.value)}
            id="outlined-multiline-required"
            label="Tips on Implementing Software"
            multiline
            rows={4}
            helperText="Enter tips for other businesses and upload resources"
            />

            <TextField
            onChange={(e) => setTags(e.target.value)}
            id="outlined-multiline-required"
            label="Tags"
            multiline
            rows={4}
            helperText="Add additional tags related to the software"
            />

            </div>

          {/* <Button
          
            style={{
              backgroundColor:"#21b6ae"
            }}
            variant="contained"
            >
              Upload
          </Button> */}

          <TextField
          onChange={(e) => setComments(e.target.value)}
          id="outlined-multiline-required"
          label="Additional Comments"
          multiline
          rows={4}
          helperText="Add additional comments for the review"
          />

        </Box>

        <Button
          component={Link} to="/dashboard"
          style={{
            backgroundColor:"#21b6ae"
          }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
    </div>
    </form>
    </div>
    );
}