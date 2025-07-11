import React from 'react'
import Header from '../Heaader/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Help.css'
const Help = () => {

  return (
    <div className="homeHolder">
      <Header/>
      <Navbar />
      
<div className='helpcurb'><h2>Help</h2></div>
<div className='helpContainer'>
<h2>Welcome to Tracs.app</h2>
<p>This page will help you get started using Tracs.app</p>
<p>1. Home Page</p>
<p>2. Signup </p>
<p>3. Login  </p>
<p>4. Dashboard</p>
<p>5. Make Introduction</p>
<p>6. Messages</p>
<p>7. Contacts </p>
<p>8. Templates</p>
<p>9. Signature</p>
<p>10. My Profile</p>
<p>11. Affiliation</p>

<p style={{marginTop:"60px"}}>1) Home Page: </p>
<p>Open your web browser. Visit: https://tracs.app</p>
<div><img style={{width:"100%"}} src='https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_home.png'/></div>
<p style={{marginTop:"40px"}}>2) Sign up/Register: </p>
<p>Easily connect, collaborate, and keep track of your network. Sign up now at https://tracs.app/register and start building stronger relationships with your community.</p>
<div><img style={{width:"100%"}}src="https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_signup.png"/></div>
<p style={{marginTop:"40px"}}>3. Login  </p>
<p>H7 members can log in without registration. All the H7 members are imported into the TRACS app.</p>
<p>H7 Members can reset their password using the “Forgot Password” link on the login page. It will send a password Reset link to the registered email. Clicking the link allows the user to generate a new password.</p>
<div><img style={{width:"100%"}} src="https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_login.png"/></div>
<p style={{marginTop:"40px"}}>4. Dashboard</p>
<p>After a successful login, the user will be directed to the homepage.</p>
<div><img style={{width:"100%"}}src='https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_dashboard.png'/></div>
<p>On the homepage, click on the Dashboard button to see the Introduction Messages.</p>
<p style={{marginTop:"40px"}}>In the Dashboard, users can perform various actions. Use the “Make Introduction” button to initiate an Introduction message to introduce H7 Members to H7 Members or your contacts. You can add contacts in the Make Introduction page also.</p>
<div><img  style={{width:"100%"}}src='https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_login_message.png'/></div>
<p style={{marginTop:"40px"}}>5. Make Introduction</p>
<p style={{marginTop:"40px"}}>Once you click on the "Make Introduction" page, you’ll be directed to a form where you can choose members & Contacts to introduce using dropdown lists.</p>
<p>a) Choose a Member Type from the Directory dropdown list.</p>
<p>b) Next, use the Search option to find specific members By entering Their Name, Email and Business Name.</p>
<p>c) Select a member by clicking the checkbox next to their name.</p>
<p>d) The selected member’s details will then appear in the Selected Emails section.</p>
<p>e) Minimum 2 Parties Required</p>
<p style={{marginTop:"40px"}}>Make Introduction ->Sequence Order of the selected users/members
User can change the sequence of selected members by clicking the reorder button that appears below the Selected Members section</p>
<div><img style={{width:"100%"}} src='https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_sequence.png'/></div>
<p>Once you click the Reorder button, the sequence of selected members is updated, and the email subject line is automatically modified to match the new order
</p>
<div><img style={{width:"100%"}}src="https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_makeintroduction.png"/></div>
<p style={{marginTop:"40px"}}>Make Introduction -> Selecting Template</p>
<p style={{width:"100%"}}>Users can choose an email template from the "Select Template" dropdown list. This list includes both admin level templates and
user created templates.</p>
<p style={{width:"100%"}}>Managing user level Email Templates</p>
<p style={{width:"100%"}}>Users can create their own email templates by clicking the "Manage Templates" link located next to the Select Template
dropdown.</p>
<div><img  style={{width:"100%"}}src='https://tracsdev.apttechsol.com/public/uploads/custom-pages-images/tracs_select_template.png'/></div>
<p>Upon clicking Manage Templates, you will be redirected to the User Dashboard > Templates page. From there, you can add new templates or update existing ones as needed</p>
<p style={{marginTop:"40px"}} >Make Introduction -> Replace Tokens</p>
<p style={{marginTop:"20px"}}>When the user clicks the "Replace Tokens" button, the names of the selected members are automatically replaced with their corresponding tokens in the email content.</p>
<p style={{marginTop:"40px"}}>If the user attempts to send the email without replacing the tokens, an error message will be displayed prompting them to complete the token replacement first.</p>
<p style={{marginTop:"40px"}}>Dashboard: After Sending the Email</p>
<p style={{marginTop:"20px"}}>After clicking the Send button, the page will redirect directly to the Messages page.
</p>
<p style={{marginTop:"40px"}}>Here, the user can view their list of messages, with the most recently sent messages displayed at the top
</p>
<p style={{marginTop:"40px"}}>Dashboard -> Reply button</p>
<p style={{marginTop:"20px"}}>User can manage contacts form the Dashboard. User can import contacts of Phone, Google, Linkedin. To import contacts, download the template and prepare your contacts file and import. User can add individual contact by clicking on the Add Contact</p>
<p style={{marginTop:"40px"}}>Dashboard -> Signature</p>
<p style={{marginTop:"20px"}}>User can add signature to add the signature in the messages
</p>
<p style={{marginTop:"40px"}}>Dashboard -> Templates</p>
<p style={{marginTop:"20px"}}>Admin will give a few templates. User add user specific templates for Introduction, Reply, Bump and more categories</p>
<p style={{marginTop:"40px"}}>Reply from Email
User can reply to the messages from email by clicking Reply button
</p>
<p style={{marginTop:"40px"}}>Reply Button from Email without login the app
User can reply to the messages without login to the app</p>
<p style={{marginTop:"40px"}}>Reply Button from Email with login to the app</p>
<p style={{marginTop:"20px"}}>User can reply to the messages with login to the app. When logged in, it will show templates and Signature</p>
<p style={{marginTop:"40px"}}>User Profit Edit</p>
<p style={{marginTop:"20px"}}>Users can edit their profile. They can also check their profile view by clicking My Profile View button.</p>
<p style={{marginTop:"40px"}}>Profile Details page.</p>
<p style={{marginTop:"20px"}}>By clicking View My Profile, the user can check their profile details page</p>
<p style={{marginTop:"40px"}}>Contact Import
Users can import their own contacts. To import contacts, first download the template and prepare contacts in the specific format mentioned in the template.Then import the file.</p>
<p style={{marginTop:"40px"}}>Affiliation To TRACS
H7 members can have an affiliation to TRACS. H7 members can access this feature through User Dashboard > Account Settings > Affiliation.</p>
<p></p>

</div>
      <Footer />
    </div>
  );
};

export default Help
