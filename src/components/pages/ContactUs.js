import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function ContactUs() {
    return (
    <>    
        <p className='page-heading'>Contact Us</p>
        <table className='da-table'>
            <th></th>
            <th>Abdulrahman</th>            
            <th>Krushang</th>
            <th>Lo Gu</th>
            <th>Muzakkir</th>
            <th>Romy</th>
            <tr>
            <td>linkedIn</td>
            <td>linkedInlink</td>
            <td>linkedInlink</td>
            <td>linkedInlink</td>
            <td>linkedInlink</td>
            <td>linkedInlink</td>                
            </tr>   
            <tr>
                <td>GitHub</td>
                <td>GitHublink</td>
                <td>GitHublink</td>
                <td>GitHublink</td>
                <td>GitHublink</td>
                <td>GitHublink</td>
            </tr>  
            <tr>
                <td>Instagram</td>
                <td>Instagramlink</td>
                <td>Instagramlink</td>
                <td>Instagramlink</td>
                <td>Instagramlink</td>
                <td>Instagramlink</td>
            </tr>  
            <tr>              
            <td>Twitter</td>            
            <td>Twitterlink</td>            
            <td>Twitterlink</td>            
            <td>Twitterlink</td>           
            <td>Twitterlink</td>           
            <td>Twitterlink</td>   
            </tr>  
        </table>
        
        
        
        <Footer />
    </>    
    )
};

export default ContactUs;
