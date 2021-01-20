import React from 'react';
import PropTypes from 'prop-types';

const Getdata = ({Firstname,Lastname,Biblio})=>(


<div>
  
  <span> {Firstname}</span>
    
  <span> {Lastname}</span>

     <span> {Biblio}</span>       
   
</div>


)
Getdata.propTypes = {
    Firstname: PropTypes.string.isRequired,
    Lastname: PropTypes.string.isRequired,
    Biblio: PropTypes.string.isRequired,
    
  

  handelName: PropTypes.func.isRequired,
};

Getdata.defaultProps = {
  desc: "No Data Description",
};

       



export default Getdata;
