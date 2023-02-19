import React from "react";
import { useState,useEffect } from "react";
import earing from "./earings.png"
    const Jewlery = () =>{
        const [jewleryData, setJewleryData] = useState([{}])
       
        useEffect(()=>{
                fetch("proxy/api").then((res)=>{
                    res.json()
                }).then(data=>{
                    setJewleryData(jewleryData)
                    console.log(jewleryData)
                })
        },[])
        return(      
        <tr>
          <td>
            Hello
          </td>
        </tr>
        )
    }


export default Jewlery;