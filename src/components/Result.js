import React from 'react';
import Card from './Card.js';
import prop1 from '../images/prop1.jpg' ;
import prop2 from '../images/prop2.jpg';
import prop3 from '../images/prop3.jpg';
import prop4 from '../images/prop4.jpg';
import prop5 from '../images/prop5.jpg';
import prop6 from '../images/prop6.jpg';
import prop7 from '../images/prop7.jpg';
import prop8 from '../images/prop8.jpg';
import prop9 from '../images/prop9.jpg';
import prop10 from '../images/prop10.jpg' ;
import prop11 from '../images/prop11.jpg';
import prop12 from '../images/prop12.jpg';
import prop13 from '../images/prop13.jpeg';
import prop14 from '../images/prop14.jpg';
import prop15 from '../images/prop15.jpg';


export default function Result({ update, filters }) {

  const priceRange = [100, 500, 2500, 5000,10000];

  const houses = [
    {
      src: prop1,
      price:"$2,095",
      month:"/month",
      name:"Palm Harbor",
      address:"2699 Green Valley, Highland Lake, FL",
      bed:"3 beds",
      bathroom:"2 bathroom",
      area:"5x7 sq.m",
      region:"Florida",
      value: 2095,
      status: "Move in",
      type:"HOUSE"
    },
    {
      src: prop2,
      price:"$2,700",
      month:"/month",
      name:"Beverly Springfield",
      address:"2821 Lake Sevilla, Palm Harbor, TX",
      bed:"4 beds",
      bathroom:"2 bathroom",
      area:"6x7.5 sq.m",  
      region:"Texas",
      value: 2700,
      status: "After 1 week",
      type:"OFFICE"
    },
    {
      src: prop3,
      price:"$4,550",
      month:"/month",
      name:"Faulkner Ave",
      address:"909 Woodland, Michigan,NY",
      bed:"4 beds",
      bathroom:"3 bathroom",
      area:"8x10 sq.m",
      region:"New York",
      value: 4550,
      status: "Move in",
      type:"OFFICE"
    },

    {
      src: prop4,
      price:"$3,100",
      month:"/month",
      name:"Lake View",
      address:"1001 St Louis, Maimi, FL",
      bed:"4 beds",
      bathroom:"3 bathroom",
      area:"10x12 sq.m",
      region:"Florida",
      value: 3100,
      status: "After 2 weeks",
      type:"HOUSE"
    },

    {
      src: prop5,
      price:"$780",
      month:"/month",
      name:"La Astria",
      address:"6942 Craven Wood, Manhattan, NY",
      bed:"2 beds",
      bathroom:"2 bathroom",
      area:"5x7.5 sq.m",
      region:"New York",
      value: 780,
      status: "After 2 weeks",
      type:"WAREHOUSE"
    },

    {
      src: prop6,
      price:"$8,799",
      month:"/month",
      name:"Frontier Meadows",
      address:"2978 Cross Valley, Austin, TX",
      bed:"5 beds",
      bathroom:"4 bathroom",
      area:"14x16 sq.m",
      region:"Texas",
      value: 8799,
      status: "Move in",
      type:"HOUSE"
    },

    {
      src: prop7,
      price:"$6,090",
      month:"/month",
      name:"Sunrise Valley",
      address:"8976 Pratt Avenue, Dallas, TX",
      bed:"3 beds",
      bathroom:"2 bathroom",
      area:"11x12 sq.m",
      region:"Texas",
      value: 6090,
      status: "Move in",
      type:"HOUSE"
    },

    {
      src: prop8,
      price:"$3,050",
      month:"/month",
      name:"L&T Residency",
      address:"3398 Overlook Drive, Buffalo, NY",
      bed:"2 beds",
      bathroom:"2 bathroom",
      area:"8x10 sq.m",
      region:"New York",
      value: 3050,
      status: "After 1 week",
      type:"WAREHOUSE"
    },

    {
      src: prop9,
      price:"$990",
      month:"/month",
      name:"Landscape Ferns",
      address:"624 Amethyst Drive, Orlando, FL",
      bed:"1 beds",
      bathroom:"1 bathroom",
      area:"3x5 sq.m",
      region:"Florida",
      value: 990,
      status: "After 1 week",
      type:"WAREHOUSE"
    },

    {
      src: prop10,
      price:"$4,130",
      month:"/month",
      name:"Dream Meadows",
      address:"4889 Green Acres Road, Orlando, FL",
      bed:"4 beds",
      bathroom:"4 bathroom",
      area:"11x13 sq.m",
      region:"Florida",
      value: 4130,
      status: "After 2 weeks",
      type:"HOUSE"
    },

    {
      src: prop11,
      price:"$2,700",
      month:"/month",
      name:"LA Groove",
      address:"4286 Duff Avenue, Miami, FL",
      bed:"5 beds",
      bathroom:"4 bathroom",
      area:"12x14 sq.m",
      region:"Florida",
      value: 2700,
      status: "After 2 weeks",
      type:"HOUSE"
    },

    {
      src: prop12,
      price:"$550",
      month:"/month",
      name:"Sterling Brookeside",
      address:"530 Frosty Lane, Manhatten, NY",
      bed:"4 beds",
      bathroom:"3 bathroom",
      area:"9x12.5 sq.m",
      region:"New York",
      value: 550,
      status: "After 2 weeks",
      type:"WAREHOUSE"
    },

    {
      src: prop13,
      price:"$7,500",
      month:"/month",
      name:"Spring Beauty",
      address:"3403 Luke Lane, Dallas, TX",
      bed:"3 beds",
      bathroom:"3 bathroom",
      area:"8x11 sq.m",
      region:"Texas",
      value: 7500,
      status: "After 2 weeks",
      type:"OFFICE"
    },

    {
      src: prop14,
      price:"$300",
      month:"/month",
      name:"Rainbow Valley",
      address:"1230 Fittro Street, Orlando, FL",
      bed:"5 beds",
      bathroom:"3 bathroom",
      area:"10x11 sq.m",
      region:"Florida",
      value: 300,
      status: "After 1 week",
      type:"WAREHOUSE"
    },

    {
      src: prop15,
      price:"$2,300",
      month:"/month",
      name:"Willow Herbs",
      address:"2421 Turkey Pen Lane, Orlando, FL",
      bed:"3 beds",
      bathroom:"2 bathroom",
      area:"5x9 sq.m",
      region:"Florida",
      value: 2300,
      status: "Move in",
      type:"HOUSE"
    }
    
  ]

  return (
    <div className='Result-outer'>
      <div className='Result-inner'>
        
        {
          houses.map((house, index) => {

            if(filters["loc"]==="all")
              return <Card key = {index} House = {house}/>
            else{
              if(filters["loc"]===house.region)
              {
                console.log(filters["loc"]);
                if(filters["when"]===house.status)
                { 
                  console.log(filters["when"]);
                  if(house.value >= priceRange[Number(filters["price"])] && house.value <= priceRange[Number(filters["price"]) + 1])
                  {
                    if(filters["type"]===house.type)
                      return <Card key = {index} House = {house}/>
                  }
                }
              }
            }
          })


        }
      </div>
    </div>
  )
}
