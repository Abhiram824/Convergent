import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { db } from '../App.js';
import Read from './Read.js';
import GetData from './GetData.js';
import Navbar from "../Navbar/Navbar.js";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Dashboard() {
  
  // return (
  //   <GetData></GetData>
  // )
//   const Read = () => {
//     const [info , setInfo] = useState([]);

//     window.addEventListener('load', () => {
//       Fetchdata();
//     });


//     const Fetchdata = ()=>{
//       db.collection("Reviews").get().then((querySnapshot) => {
           
//           // Loop through the data and store
//           // it in array to display
//           querySnapshot.forEach(element => {
//               var data = element.data();
//               setInfo(arr => [...arr , data]);
                
//           });
//       })

//       return (
//         <div>
//             <center>
//             <h2>Student Details</h2>
//             </center>
          
//         {
//             info.map((data) => (
//             <Frame type={data.SoftwareType} 
//                    name={data.SoftwareName} 
//                    ratings={data.Ratings}/>
//             ))
//         }
//         </div>
  
//     );
//   }
//   }

//   const Frame = ({type , name , ratings}) => {
//     console.log(type + " " + name + " " + ratings);
//     return (
//         <center>
//             <div className="div">
                  
// <p>NAME : {name}</p>
   
                  
// <p>Ratings : {ratings}</p>
  
                  
// <p>Course : {type}</p>
   
//             </div>
//         </center>
//     );
// }

// return (
//   Read
// );



  /// Separate
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'lastName',
          headerName: 'Software Name',
          width: 150,
          editable: true,
        },
        {
          field: 'firstName',
          headerName: 'Software Type',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Rating',
          type: 'number',
          width: 110,
          editable: true,
        },
        {
          field: 'date',
          headerName: 'Date',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          
        },
      ];
      
      const rows = [
        { id: 1, lastName: 'TurboTax', firstName: 'Accounting', age: 4, date: '21 Nov 2021'},
        { id: 2, lastName: 'QuickBooks', firstName: 'Accounting', age: 4, date: '17 Nov 2021' },
        { id: 3, lastName: 'H&R Block', firstName: 'Accounting', age: 3, date: '8 Sep 2021' },
        { id: 4, lastName: 'HubSpot', firstName: 'Marketing', age: 5, date: '30 August 2021' },
        { id: 5, lastName: 'Slack', firstName: 'Communication', age: 4, date: '25 August 2021' },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, date: '21 Nov 2021' },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, date: '21 Nov 2021' },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, date: '21 Nov 2021' },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      ];
      
        return (
          <div><Navbar/>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '40vh' }}
          >
          <Card sx={{ maxWidth: 345 }}>
            {/* <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            /> */}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Biz Cafe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Austin, TX
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                10 Reviews
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                4 Softwares Types
              </Typography>
            </CardContent>
            <CardActions>
            <Stack direction="row" spacing={4} align-self="center">
              <IconButton aria-label="delete">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <ChatBubbleOutlineIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <NotificationsNoneIcon />
              </IconButton>
            </Stack>
            
            </CardActions>
          </Card>
          </Grid>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              //checkboxSelection
              disableSelectionOnClick
            />
          </div>
          </div>
        );
      }