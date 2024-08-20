import React from 'react';
import './awards.css';
import Navbar from './navbar';

const Awards = () => {
  return (
    <>
    <Navbar/>
    <div className="cash-awards-container">
      <h2>CASH AWARDS</h2>
   
     
      <table className="cash-awards-table">
        <thead>
          <tr>
            <th>Rank</th>
          
            <th>Awards & Gifts</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-5</td>
           
            
            <td>Laptop + Certificate +50% Offer</td>
          </tr>
          <tr>
            <td>6-10</td>
           
           
            <td>Gudgets + Certificate +40% Offer</td>
          </tr>
          <tr>
            <td>11-500</td>
           
          
            <td> Certificate +40% Offer</td>
          </tr>
          <tr>
            <td>501-1000</td>
           
       
            <td>Certificate +30% Offer</td>
          </tr>
          <tr>
            <td>1000+</td>
           
            
            <td>Certificate +25% Offer</td>
          </tr>
          
        </tbody>
      </table>
      
    </div>
    </>
  );
};

export default Awards;
