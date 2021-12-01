import { db } from '../App.js';
import React,{useState,useEffect} from 'react';

export default function GetData() {
    const [blogs, setBlogs]=useState([])
    const fetchBlogs=async()=>{
        const response = db.collection('Reviews');
        const data=await response.get();
        data.docs.forEach(item=>{
            setBlogs([...blogs,item.data()])
        })
    }
    useEffect(() => {
        fetchBlogs();
    }, [])
    return (
        <div className="ReadData">
            {
                blogs && blogs.map(blog=>{
                    return(
                        <div className="blog-container">
                            <h4>{blog.title}</h4>
                            <p>{blog.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}