import React from 'react';
// import Firstname from './profile/Profile';

// export const Profil = [
//     {
//       id: 1,
//       photo:
//         "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//       name: "Wissem",
//       secondName: "Ayadi",
//     }
// ]
// const ActionComponent=({handleClick})=>{

//     return (
//         <a href="/" onClick={e => handleClick(Firstname)}>
//         click me </a>
//     );
// };

const ActionComponent = ({Firstname}) => {
        const handleClick = (Firstname) => {
        
          alert ({Firstname});
        };
       
        return (
          <a href="/" onClick={()=>handleClick()}>
            Click me
          </a>
        );
       }

      //  <div className="team">
      //  {Getdata.map((Firstname, i) => (
      //    <MemberCard name={firstName} key={i} handelClick={handelClick} />
      //    </div>


export default ActionComponent;