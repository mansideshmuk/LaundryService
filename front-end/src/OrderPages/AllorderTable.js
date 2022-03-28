


import React, { useState } from 'react';
import Popuplist from './Popuplist';

export default function AllorderTable({ele}) {
    const [isopenlist, setisopenlist] = useState(false);
    function handlesummary(){
        setisopenlist(!isopenlist)
    }

    const statusArr=["ready to deliver","in Washing","in Ironing","in Bleaching"]
    
  return <div>
      <div className='table-list-data' onClick={handlesummary}>
            <p className='Order-Id '>OORD{(Math.floor(Math.random()*1000))+1}</p>
              <p className='date-time '>{ele.createdAt}</p>
              <p className='store-location '>JP Nagar</p>
              <p className='city'>Bengaluru</p>
              <p className='store-phone '>9123456789</p>
              <p className='total-items '>{ele.totalItems}</p>
              <p className='Total-Price '>{ele.totalPrice}</p>
              <p className='status '>{statusArr[Math.floor(Math.random()*3)]}</p>
              <p className='view '><i className='fa fa-eye'></i></p>
                </div>

        {isopenlist ? 
       <Popuplist finaldata={ele.orderItems} handleClose={handlesummary} />  :"" }
  </div>;
}
