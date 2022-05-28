import React, { createContext, useState } from 'react'

export const store=createContext()

const Data = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Abhilash",
"Age":"26",
"Course":"CSS",
"Batch":"August",
"id":"1"

},

{

    "Name":"Birendra",
    "Age":"25",
    "Course":"HTML",
    "Batch":"september",
    "id":"2"
    
    },
    {

        "Name":"Manoj",
        "Age":"27",
        "Course":"React",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"Nayan",
            "Age":"24",
            "Course":"CSS",
            "Batch":"januauary",
            "id":"4"
            
            },
            {
        
                "Name":"Rohan",
                "Age":"26",
                "Course":"Node.js",
                "Batch":"April",
                "id":"5"
                
                },


    ])
  return (
    <div>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Data