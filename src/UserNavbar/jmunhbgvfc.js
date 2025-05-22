

Skip to content
Using Gmail with screen readers
Conversations
68% of 15 GB used
Terms · Privacy · Programme Policies
Last account activity: 15 minutes ago
Details
@extends('layouts.user.layout2')
@section('title')
    <title>Send Mail Introduction</title>
@endsection
@section('meta')
    <meta name="description" content="{{ $seo_text->meta_description }}">
@endsection


<style type="text/css">
    .note-modal .modal-content {
        position: relative !important;
    }

    .note-modal .modal-dialog {
        margin-top: 100px !important;
    }

    .note-editable {
        overflow-y: auto !important;
    }

    .note-editor {
        overflow-y: auto !important;
    }

    .p-b50 {
        padding-bottom: 80px !important;
    }

    .note-insert button:nth-child(2) {
        display: none !important;
    }

    .search-result {
        padding: 5px;
        cursor: pointer;
    }

    .search-result:hover {
        background-color: #f0f0f0;
    }

    .email-list {
        margin-top: 10px;
        overflow-y: auto;
        max-height: 150px;
    }

    .selected-emails {
        margin-top: 2px;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        max-height: 200px;
    }
    
    #selectedEmails {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc; /* Optional border for visibility */
    padding: 8px; /* Optional padding for inner content */
}

    .selected-email {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        padding: 5px;
        border-bottom: 1px solid #ddd;
    }

    .remove-email {
        cursor: pointer;
        color: red;
        /*margin-left:222px;*/
}
    

    .search-box,
    .cc-box,
    .selected-box {
        margin-bottom: 20px;
    }

    .selected-email-checkbox {
        margin-right: 10px;
    }

    /* Styling for the add new contact button */
    .add-contact-btn {
        font-size: 20px;
        cursor: pointer;
        color: green;
        margin-left: 10px;
    }
    .modal-dialog {
    margin-top: 20 !important;
}

input[type=checkbox]#includeSignature {
    opacity: 1 !important;
    margin-left: 1px !important;
}

#addNewContactBtn {
    font-size: 45px; /* Increase the font size */

}

.note-toolbar, .card-header {
    display: none !important;
}

.checkbox {
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

.checkbox input[type="checkbox"] {
    /*width: 18px;*/
    /*height: 18px;*/
    /*margin-right: 8px;*/
    cursor: pointer;
}
.search-result {
      background-color: #d0dedb;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    border-bottom: 1px solid black;
    transition: background-color 0.3s;

}

.search-result:hover {
    background-color: #f9f9f9;
}

.profile-image {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.member-info {
    flex-grow: 1;
    font-size: 14px;
    color: #333;
}

.member-info .font-bold {
    font-size: 16px;
    color: #000;
}

@media (min-width: 768px) {
    .col-md-12 {

        max-height: 320px;
    }
    .col-form-label {
        padding-top: 0.8px;
    }
}

.note-editable {
  max-height: 294.2px;
  overflow-y: auto;
}
/* Customize the appearance of Bootstrap tooltip */
.tooltip-inner {
    max-width: 300px !important; /* Set maximum width of the tooltip */
    padding: 15px;    /* Add padding for larger box */
    font-size: 16px;  /* Increase font size */
    background-color: #4e73df; /* Change background color */
    color: #fff;     /* Set text color */
    border-radius: 10px; /* Rounded corners */
    text-align: left !important;  /* Align text to the left */
}

/* Optional: Adjust the arrow of the tooltip */
.tooltip-arrow {
    border-width: 10px;
    border-color: #4e73df transparent transparent transparent; /* Match the arrow color */
}
.bg-orange-light {
    background-color: #fff !important;
}

.back {
    padding: 10px 10px !important;
}

.help-icon{
    position: relative;
    left: 5px;
    color: #9e9e9e;
    top: 0px;
}
   

</style>

<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/css/bootstrap.min.css" rel="stylesheet"> -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css" rel="stylesheet">

@section('user-content')
<div class="page-content">
    <div class="page-headline">
        <div class="container">
            <div class="banner-title-name">
                <h2 class="text-white">Make Introduction</h2>
            </div>
        </div>
    </div>

    <?php
        $sentMaildata = request()->has('flag') ? \App\MailSentHistory::where('id',request()->get('flag'))->first() : new \App\MailSentHistory();
        // $redirect_to = request()->has('flag') && $sentMaildata->send_to_id == Auth::user()->id ? route('user.introduction-email.template') : route('user.introduction-email.template');
        $redirect_to = request()->has('flag') && $sentMaildata->send_to_id == Auth::user()->id ? route('user.listview.inboxfrom_intro') : route('user.listview.inboxfrom_intro');
        
        
        $redirect_to_sent_mail = request()->has('flag') && $sentMaildata->send_to_id == Auth::user()->id ? route('user.listview.inboxfrom_intro') : route('user.listview.inboxfrom_intro');
    ?>

    <div class="section-full p-b50 bg-orange-light">
        <div class="container">
            <div class="back_cont" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
    <a class="back" href="{{ $redirect_to }}" style="font-size: 22px;padding: 10px 10px !important;">
        <i class="fa fa-reply fa_back" aria-hidden="true"></i>
    </a>
    

    
    <a  class="btn btn-primary mt-2  float-right" href="{{ $redirect_to_sent_mail }}" style="">Previous Introductions</a>   
</div>
            

            <form id="sendMailForm">
                @csrf
                <div class="form-group row mb-0 firsttu">
                    <div class="col-md-10 col-form-label">
                        <label class="font-weight-bold mb-0">Directory</label>
                        
                        @php
                            $key_field = $keyfields->where('name', 'Directory')->first();
                        @endphp
        
                        @if(!empty($key_field))
                            <span class="ps-5">
                                  <a href="#" class="" data-bs-toggle="tooltip" title="{!! $key_field->description !!}">
                                    <i class="fa-solid fa-question-circle ps-2 web-text-color help-icon"></i>
                                  </a>
                            </span>
                        @endif
                        
                        

                        <select class="form-control" id="recipientType" name="recipient_type" onchange="updateRecipientList()">
                            <option value="members">H7 Members</option>
                             <option value="tracs_members">Tracs Members</option>
                            <option value="contacts">My Contacts</option>
                        </select>
                    </div>

      <div class="col-md-10 col-form-label"  >
    <label class="font-weight-bold mb-0">Who would you like to send email to</label>
</div>

<div class="col-md-10 d-flex align-items-center mb-0" style="margin-top:-5px;">
    <input type="text" id="searchBox" class="form-control flex-grow-1" placeholder="Search..." onkeyup="filterList()">
    <span class="add-contact-btn ml-2" id="addNewContactBtn">+</span>
</div>

                    <!-- Search Results Div -->
                    <div class="col-md-12 email-list" id="searchResults">
                        <!-- Filtered members/contacts will show here -->
                    </div>

                    <!-- Selected Emails Div -->
                    <div class="col-md-12 mt-2 col-form-label selected-box" style="margin-top: 1px;">
                        <label class="font-weight-bold mb-0">Selected Emails</label>
                       <span id="" style="font-size:12px;">( Minimum 2 parties are required. )</span>
                        <div id="selectedEmails" class="selected-emails" style="max-height: 200px; overflow-y: auto;"></div>
                        <input name="mail_id[]" class="form-control" value="" type="hidden">
                    </div>

                    <!-- CC Box Div -->
                    <!--<div class="col-md-12 col-form-label cc-box">-->
                    <!--    <label class="font-weight-bold mb-0">CC</label>-->
                    <!--    <textarea rows="4" name="cc_mail_id" class="form-control" placeholder="CC: "></textarea>-->
                    <!--    <p class="my-1 tip-mes">(You can enter multiple emails separated with semicolon)</p>-->
                    <!--</div>-->
                    
                    <input name="cc_mail_id" class="form-control" type="hidden">
                </div>

                <!-- Select Template -->
                <?php 
// if($activepackage->listingPackage->manage_mail_templates == 1): 
//     if( !request()->has('flag')): 
?>

                    <div class="form-group row mb-0" style=" margin-top: 1px;">
                        <div class="col-md-12 col-form-label">
                            <label class="font-weight-bold mb-0">Select Template</label> 
                            @php
                            $best_field = $keyfields->where('name', 'Best Practices')->first();
                        @endphp
        
                        @if(!empty($best_field))
                            <span id="best_practices" style="font-size:13px;">  Best practices?</span>
                            @endif

                            <a href="{{route('user.listview.template')}}" class="float-right"><strong>Manage Templates</strong></a>

                            <select class="form-control" id="temp_dyn" name="template_id">
                                <option value="">Select Template</option>
                                <?php if(!empty($templates)){ 
                                    foreach ($templates->where('category_id','!=',3) as $key) {
                                    ?>
                                    <option value="{{$key->id}}" <?php if(!empty($temp_data) && $temp_data->id == $key->id){ echo "selected";} ?>>{{$key->template_name}}</option>

                               <?php } } ?>
                            </select>
                        </div>
                    </div>
               <?php 
//     endif; 
// endif; 
?>



                
                    <div class="form-group row" style=" margin-top: 1px;">
                        <div class="col-md-12 col-form-label">
                            <label class="font-weight-bold mb-0">Subject</label>
                            <input name="subject" type="text" class="form-control" placeholder="Subject" required="" id="template_subject" value="<?php if(!empty($temp_data->subject)){ echo $temp_data->subject; }else{ if(request()->has('flag')) {echo $sentMaildata->subject; } }?>" <?php if(request()->has('flag')){ echo "readonly"; } ?>>

                        </div>
                    </div>
                    <div id="loadingSpinner" style="display: none; text-align: center;">
    <img src="{{ asset('uploads/website-images/Iphone-spinner-2.gif') }}" alt="Loading...">
</div>
                                                    
                    <div class="form-group row" style=" margin-top: 1px; margin-bottom: 0;">
                        <div class="col-md-12 col-form-label">
                            <label class="font-weight-bold mb-0">Message</label>
                            <textarea rows="7" name="message" class="form-control summernote" placeholder="Message" required="" ><?php if(!empty($temp_data)){ echo $temp_data->email_body; } ?>
                            
                            @if(empty($signature) || !isset($signature))
                                <br>
                                <br>
                                {!! Auth::user()->name ?? 'Name not available' !!}
                                <br>
                                {!! Auth::user()->email ?? 'Email not available' !!}
                                <br>
                                {!! Auth::user()->phone ?? 'Phone not available' !!}
                            @endif

                           </textarea>

                       </div>
                    </div>
                    
                    <div class="form-group row mb-0" style="margin-top: 10px; margin-bottom: 2px; " >
                        <div class="col-md-12 col-form-label">
                            <div class="font-weight-bold mb-0 notes_replace d-none">Notes: Replace tokens for (( here all the token names comes )) with values.</div>
                        </div>
                    </div>
                    <div id="error-message" style="color:red;"></div>
                     <div class="form-group row mb-0">
                         <div class="col-12 col-sm-6 col-lg-6 my-1 my-sm-auto">
                             <label for="includeSignature" class="mb-0">
                                <input type="checkbox" id="includeSignature" checked> Include Signature
                            </label>
                        @php
                            $key_field = $keyfields->where('name', 'Include Signature')->first();
                        @endphp
        
                        @if(!empty($key_field))
                            <span class="ps-5">
                                  <a href="#" class="" data-bs-toggle="tooltip" title="{!! $key_field->description !!}">
                                    <i class="fa-solid fa-question-circle ps-2 web-text-color help-icon"></i>
                                  </a>
                            </span>
                        @endif
    
                         </div>
                         <div class="col-12 col-sm-6 col-lg-6 my-1 my-sm-auto">
                             <div>
                                <button type="submit" class="btn btn-primary float-right" id="sendEmailBtn" style="margin-left: 10px">Send</button>   
                                <a href="{{$redirect_to}}"><button type="button" class="btn btn-danger float-right" data-dismiss="modal">Cancel</button></a>
                             </div>
                         </div>
                            
                    </div>


            </form>
            
        </div>
    </div>
</div>

<?php 
    $username = Auth::user()->name;
    $useremail = Auth::user()->email;
    $userphone = Auth::user()->phone;
?>

<!-- Modal for adding new contact -->
<div class="modal" id="addContactModal" tabindex="-1" role="dialog" aria-labelledby="addContactModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addContactModalLabel">Add New Contact</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="addContactForm">
          <meta name="csrf-token" content="{{ csrf_token() }}">
        <div class="modal-body">
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" class="form-control" id="first_name" name="first_name" required>
          </div>
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" class="form-control" id="last_name" name="last_name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" required>
          </div>
                    <div class="form-group">
            <label for="group_name">Group Name</label>
            <input type="text" class="form-control" id="group_name" name="group_name" >
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save Contact</button>
        </div>
      </form>
    </div>
  </div>
</div>


<div class="modal" id="best_practices_model" tabindex="-1" role="dialog" aria-labelledby="addContactModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="best_practices_model">Help</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
        <div class="modal-body">
          <div class="form-group">
               @if(!empty($best_field))
               <div>
                
                   {!! $best_field->description !!}
               </div>
               @endif
              
<!--            <p style="color:orange;"><b>Examples of Introductions and their Effectiveness Level:</b></p>-->
<!--             <p style="color:orange;">Very effective with a high rate of success: </p>-->
<!--             <p>Hi Kristen, I'd like to introduce you to John Smith with Results Resourcing 4You. John is brand new to the H7 way and he's looking to build mutually beneficial relationships with potential champions in your space so I instantly thought of you. I thought you two could meet over zoom and see if there's a way to help each other out.-->
<!--Can one of you reply to schedule that 1:1?</p>-->
<!--<p><b>Why this is so effective:</b> This introduction strongly endorses both the connection and the individual being introduced, making it highly meaningful. The likelihood of successfully setting up and executing an appointment is very high. For new members now trying to complete a CSA One-to-One, initiating this relationship becomes significantly smoother from the start.</p>-->

<!--<p style="color:orange;">Effective with a lower rate of success: </p>-->
<!--<p>Hi Kristen, I'd like to introduce you to John Smith with Results Resourcing 4You. John meet Kristen. Kristen meet John. I think you two should connect.-->
<!--</p>-->
<!--<p><b>Why is this not as effective:</b> This introduction lacks clarity on the purpose of the meeting, making it less meaningful. The likelihood of successfully setting up and executing an appointment is medium to low. For new CSA One-to-One members, initiating this relationship is a significant challenge from the start.-->
<!--</p>-->
<!--<p style="color:orange;">Effective with a very low rate of response along with lots of confusion:</p>-->
<!--<p>Hi Kristen, meet John Smith. Kristen meet John. I think you two should connect</p>-->
<!--<p><b>Why is this not as effective:</b> This introduction lacks clear reasons for the meeting, making it less meaningful and harder for both parties to navigate. Consequently, the likelihood of successfully setting up an appointment and fostering a connection is low. For new members now trying to complete a CSA One-to-One, initiating this relationship presents a significant challenge from the outset.-->
<!--</p>-->

          </div>
          
        </div>

      
    </div>
  </div>
</div>


<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script> -->

<script type="text/javascript">
    var selectedEmails = [];
    
    
    
  $(document).ready(function() {
    // Initialize Summernote (if not already initialized)
    $('.summernote').summernote({
        disableResizeEditor: false
    });
 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

    // Check if signature exists for the user
    // var userSignature = {!! json_encode(isset($signature) && $signature->name ? nl2br(e($signature->name)) : '') !!};
    // const signature = `\n\nBest regards,\n\n${userSignature.trim()}`
    

    // Get the user signature
   var userSignature = {!! json_encode(isset($signature) && $signature->name ? e($signature->name) : '') !!};
    
    // Decode the HTML entities (e.g., &lt; becomes <, &gt; becomes >)
    var userSignatureDecoded = decodeHtml(userSignature);
    
    // Convert newlines to <br> for proper display
    const userSignatureFormatted = userSignatureDecoded.replace(/\n/g, '').trim();
    
    //alert(userSignatureFormatted); // This should now show the raw HTML content with proper line breaks

    // Build the full signature text, ensuring it has proper formatting

    const signature = `<br><br><div class="signature-class">${userSignatureFormatted}</div>`;

//alert(signature);
    // Function to update Summernote content with or without the signature
    function updateMessageWithSignature() {
        var currentContent = $('.summernote').summernote('code');
        
        if (userSignatureFormatted === '') {
            // If signature is empty, show a warning message
            return; // Exit if there's no signature
        }

        // Check if the signature checkbox is checked
        if ($('#includeSignature').is(':checked')) {
            // Add signature if it's not already there
           if (!currentContent.includes('<div class="signature-class">')) {
                $('.summernote').summernote('code', currentContent + signature);
            }
        } else {
            // Remove signature if unchecked
              var updatedContent = currentContent.replace(/<br><br><div class="signature-class">[\s\S]*?<\/div>/g, '').trim();
            $('.summernote').summernote('code', updatedContent);
        }
    }

    // Handle the checkbox change event
    $('#includeSignature').on('change', function() {
        updateMessageWithSignature(); // Update content when checkbox is toggled
    });

    // Initialize the editor with the correct state when the page loads
    updateMessageWithSignature();

    // Function to decode HTML entities
    function decodeHtml(html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }
});




    // Update the recipient list based on the selected type (members or contacts)
   function updateRecipientList() {
    var recipientType = $('#recipientType').val();
    var targetUrl;
    
    if (recipientType === 'members') {
        targetUrl = '{{ route('user.getMembers') }}';
    } else if (recipientType === 'contacts') {
        targetUrl = '{{ route('user.getContacts') }}';
    } else if (recipientType === 'tracs_members') {
        targetUrl = '{{ route('user.getTracsMembers') }}';
    }

    if (recipientType == 'contacts') {
        $('#addNewContactBtn').show();
    } else {
        $('#addNewContactBtn').hide();
    }

    $.ajax({
        url: targetUrl,
        method: 'GET',
        success: function(data) {
            if (data.success) {
                var users = data.users; // Array of {name, email}
                var searchResults = $("#searchResults");
                searchResults.empty();

                users.forEach(function(user) {
                    var icon;
                    var profileImage = user.image ? "{{ asset('') }}" + user.image : "{{ asset('uploads/user_avatar.jpeg') }}";
                    var profileImage_contact = "{{ asset('uploads/contact_icon.png') }}";
                    
                    // Set the icon depending on the recipient type
                    if (recipientType === 'members') {
                        icon = '<i class="fas fa-user"></i>';
                    } else if (recipientType === 'tracs_members') {
                        icon = '<i class="fas fa-user"></i>';
                    } else {
                        icon = '<i class="fas fa-address-book"></i>';
                    }

                    // Check if this user was previously selected
                    var isChecked = selectedEmails.some(function(emailObj) {
                        return emailObj.email === user.email && emailObj.type === recipientType;
                    });

                    var checkboxChecked = isChecked ? 'checked' : ''; // Check if the checkbox should be pre-selected

                    // Add the user to the search results
                    if (recipientType === 'members' || recipientType === 'tracs_members') {
                        searchResults.append(
                            '<div class="search-result flex items-center sm:flex-wrap gap-4 p-2 border-b hover:bg-gray-100" data-name="' + user.name + '" data-email="' + user.email + '" data-type="' + recipientType + '">' +
                                '<div class="checkbox flex-shrink-0">' + // Place checkbox first
                                    '<input type="checkbox" class="email-checkbox" id="email-' + user.email + '" data-email="' + user.email + '" data-name="' + user.name + '" data-type="' + recipientType + '" data-img="' + profileImage + '" data-business_name="' + user.business_name + '" ' + checkboxChecked + '/>' +
                                    '<label for="email-' + user.email + '" class="ml-2"></label>' +
                                '</div>' +
                                '<div class="profile-image w-16 h-16 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">' +
                                    '<img src="' + profileImage + '" alt="' + user.name + '" class="w-full h-full object-cover">' +
                                '</div>' +
                                '<div class="member-info flex-grow flex flex-col sm:flex-row sm:items-center sm:gap-4 min-w-0 text-truncate">' +
                                    '<div class="font-bold text-lg text-truncate"><b>' + user.name + '</b></div>' +
                                    '<div class="text-sm text-gray-600 text-truncate sm:whitespace-nowrap d-flex align-items-center"> <i class="fas fa-envelope"></i> &emsp;<span class="text-truncate">' + user.email + '</span></div>' +
                                    (user.business_name ? '<div class="text-sm text-gray-500 text-truncate sm:whitespace-nowrap"> <i class="fa-solid fa-address-card"></i> &emsp;' + user.business_name + '</div>' : '') +
                                '</div>' +
                            '</div>'
                        );
                    } else {
                        searchResults.append(
                            '<div class="search-result flex items-center sm:flex-wrap gap-4 p-2 border-b hover:bg-gray-100" data-name="' + user.name + '" data-email="' + user.email + '" data-type="' + recipientType + '">' +
                                '<div class="checkbox flex-shrink-0">' + // Place checkbox first
                                    '<input type="checkbox" class="email-checkbox" id="email-' + user.email + '" data-email="' + user.email + '" data-name="' + user.name + '" data-type="' + recipientType + '" ' + checkboxChecked + '/>' +
                                    '<label for="email-' + user.email + '" class="ml-2"></label>' +
                                '</div>' +
                                '<div class="profile-image w-16 h-16 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">' +
                                    '<img src="' + profileImage_contact + '" alt="' + user.name + '" class="w-full h-full object-cover">' +
                                '</div>' +
                                '<div class="member-info flex-grow flex flex-col sm:flex-row sm:items-center sm:gap-4 min-w-0 text-truncate">' +
                                    '<div class="font-bold text-lg text-truncate"><b>' + user.name + '</b></div>' +
                                    '<div class="text-sm text-gray-600 text-truncate sm:whitespace-nowrap d-flex align-items-center"> <i class="fas fa-envelope"></i> &emsp;<span class="text-truncate">' + user.email + '</span></div>' +
                                '</div>' +
                            '</div>'
                        );
                    }
                });
            }
        },
        error: function(error) {
            console.error('Error fetching users:', error);
        }
    });
}


    // Filter the search results based on the input
    function filterList() {
        var query = $('#searchBox').val().toLowerCase();
        var items = $('#searchResults .search-result');

        items.each(function() {
            var name = $(this).data('name').toLowerCase();
            var email = $(this).data('email').toLowerCase();
            if (name.includes(query) || email.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Handle checking/unchecking checkboxes
    $(document).on('change', '.email-checkbox', function() {
        var email = $(this).data('email');
        var name = $(this).data('name');
        var img = $(this).data('img');
        var business_name = $(this).data('business_name');
         var recipientType = $(this).data('type'); // Get the recipient type (member or contact)

        if ($(this).prop('checked')) {
            // Add email to selectedEmails array
           
             selectedEmails.push({ email: email, name: name, type: recipientType,img:img,business_name:business_name });
            
        } else {
            // Remove email from selectedEmails array
            selectedEmails = selectedEmails.filter(function(emailObj) {
            return emailObj.email !== email;
            });
        }

        updateSelectedEmails();
    });
    

var authuserName ="{{Auth::user()->name??''}}";
    // Update the selected emails display
// Update the selected emails display
function updateSelectedEmails() {
    var selectedList = $('#selectedEmails');
    selectedList.empty(); // Empty existing content

    var subjectPrefix = 'Intro - ' + authuserName + ' <> ';
    var selectedNames = selectedEmails.map(function(emailObj) {
        return emailObj.name;  // Collect the names of selected emails
    });

    // Join names with commas for the subject
    var dynamicSubject = subjectPrefix + selectedNames.join(' <> ');

    // Update the subject field with dynamic subject
    $('#template_subject').val(dynamicSubject);

    selectedEmails.forEach(function(emailObj) {
        // Choose icon based on the recipient type
        var icon;
        if (emailObj.type === 'members') {
            icon = '<i class="fas fa-user"></i>'; // Person icon for members
        } else if (emailObj.type === 'contacts') {
            icon = '<i class="fas fa-address-book"></i>'; // Address book icon for contacts
            emailObj.img = '{{ asset("uploads/contact_icon.png") }}'
        } else if (emailObj.type === 'tracs_members') {
            icon = '<i class="fas fa-user"></i>'; // Gear icon for Tracs members
        } else {
            icon = '<i class="fas fa-question-circle"></i>'; // Default icon for unknown type
        }

        // Add the email to the list with the selected icon and details
        if (emailObj.type === 'members' || emailObj.type === 'tracs_members') {
            selectedList.append(
                '<div class="search-result flex items-center sm:flex-wrap gap-4 p-2 border-b hover:bg-gray-100 selected-email">' +
                    '<div class="checkbox flex-shrink-0"></div>' +
                    '<div class="profile-image w-16 h-16 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">' +
                        '<img src="' + emailObj.img + '" alt="' + emailObj.name + '" class="w-full h-full object-cover">' +
                    '</div>' +
                    '<div class="member-info flex-grow flex flex-col sm:flex-row sm:items-center sm:gap-4 min-w-0 text-truncate">' +
                        '<div class="font-bold text-lg text-truncate">' + emailObj.name + '</div>' +
                        '<div class="text-sm text-gray-600 text-truncate sm:whitespace-nowrap d-flex align-items-center"> <i class="fas fa-envelope"></i> &emsp;<span class="text-truncate">' + emailObj.email + '</span></div>' +
                        (emailObj.business_name ? '<div class="text-sm text-gray-500 text-truncate sm:whitespace-nowrap"> <i class="fa-solid fa-address-card"></i> &emsp;' + emailObj.business_name +
                        '<input type="hidden" name="mail_id[]" value="' + emailObj.email + '">' + '</div>' : '') +'<div>' +
                    '</div>' + '</div>' +
                    '<div>' + '<span class="remove-email" data-email="' + emailObj.email + '">X</span>' + '</div>' +
                '</div>'
            );
        } else {
            selectedList.append(
                '<div class="search-result flex items-center sm:flex-wrap gap-4 p-2 border-b hover:bg-gray-100 selected-email">' +
                    '<div class="checkbox flex-shrink-0"></div>' +
                    '<div class="profile-image w-16 h-16 rounded-full overflow-hidden border border-gray-300 flex-shrink-0">' +
                        '<img src="' + emailObj.img + '" alt="' + emailObj.name + '" class="w-full h-full object-cover">' +
                    '</div>' +
                    '<div class="member-info flex-grow flex flex-col sm:flex-row sm:items-center sm:gap-4 min-w-0 text-truncate">' +
                        '<div class="font-bold text-lg text-truncate">' + emailObj.name + '</div>' +
                        '<div class="text-sm text-gray-600 text-truncate sm:whitespace-nowrap d-flex align-items-center"> <i class="fas fa-envelope"></i> &emsp;<span class="text-truncate">' + emailObj.email + '</span></div>' +
                        '<input type="hidden" name="mail_id[]" value="' + emailObj.email + '">' +
                    '</div>' +
                    '<div>' + '<span class="remove-email" data-email="' + emailObj.email + '">X</span>' + '</div>' +
                '</div>'
            );
        }
    });

    // Add all selected emails to the hidden input field
    var emailIds = selectedEmails.map(function(emailObj) { return emailObj.email; });
    $("input[name='mail_id[]']").each(function(index) {
        $(this).val(emailIds[index] || ''); // Update hidden inputs
    });

    // Scroll to the bottom of the list to show the latest selections
    selectedList[0].scrollTop = selectedList[0].scrollHeight;
}




    // Remove email from selected list and uncheck checkbox
    $(document).on('click', '.remove-email', function() {
        var email = $(this).data('email');
        selectedEmails = selectedEmails.filter(function(emailObj) {
            return emailObj.email !== email;
        });

        updateSelectedEmails();

        // Uncheck the corresponding checkbox
        $('#email-' + email).prop('checked', false);
    });

    // Initialize the recipient list when the page loads
    $(document).ready(function() {
        updateRecipientList();
        
         $('.summernote').summernote({
        disableResizeEditor: false
    });

    
    // var userName = {!! json_encode(isset($signature) && $signature->name ? nl2br(e($signature->name)) : '') !!};
        
    //     var userSignature = '<br><br>' + userName;
    
    // var userSignature = {!! json_encode(isset($signature) && $signature->name ? nl2br(e($signature->name)) : '') !!};
    // const signatureWithBreaks = `\n\nBest regards,\n\n${userSignature.trim()}`;
    
    
  var usernamess = {!! json_encode(Auth::user()->name) !!};
    var useremailss = {!! json_encode(Auth::user()->email) !!};
    var userphoness = {!! json_encode(Auth::user()->phone) !!};

    // Default signature if there's no custom signature
   var deSignature = `\n\n<br>${usernamess}<br>${useremailss}<br>${userphoness}`;
    console.log(deSignature);  // Log the default signature to check the value
    
    // Check if $signature exists and has a name (using Blade syntax to evaluate in PHP)
    var userSignature;
    @if(isset($signature) && $signature->name)
        // If custom signature exists, use it
        userSignature = {!! json_encode($signature->name) !!};
    @else
        // Otherwise, use the default signature
        userSignature = deSignature;
    @endif
    
    
const userSignatureFormatted = userSignature.replace(/\n/g, ''); // Ensures proper newlines
const signatureWithBreaks = `<br><br><div class="signature-class">${userSignatureFormatted}</div>`;



$('#temp_dyn').on('change', function () {
    var selectedValue = $(this).val();
    
     if (selectedValue === "") {
        if ($('#includeSignature').prop('checked')) {
         
             $('.notes_replace').addClass('d-none');
             $('#error-message').hide();
            $('.summernote').summernote('code', signatureWithBreaks);
        } else {
          
             $('.notes_replace').addClass('d-none');
            $('.summernote').summernote('code', '');
             $('#error-message').hide();
        }
    } else {

   
    $.ajax({
        url: '{{url("templateChange")}}', // Replace with the actual URL to fetch data
        method: 'post',
        data: { selectedValue: selectedValue, _token: "{{csrf_token()}}"},
        success: function (data) {
      
          $('#error-message').hide();
        if (data && data.template) {
            var email_body = data.email_body;
            
             if (data.tokens) {
               
                $('.notes_replace').removeClass('d-none');
            
             
                var tokensDisplay = data.tokens; // This is the string with the format "[[token1]], [[token2]]"
            
                
                var formattedTokensDisplay = tokensDisplay.replace(/,\s*/g, '<br>');
                
            
            
                $('.notes_replace').html('Notes: Replace the following tokens with the value(s) including brackets <br>' + formattedTokensDisplay );
            } else {
                
                $('.notes_replace').addClass('d-none');
            }

            if (data.template.user_type == 0) {
                console.log('admin');
                $('.summernote').summernote('code', email_body);
            } else {
                console.log('user');
                $('.summernote').summernote('code', email_body);
            }
            
   
            if ($('#includeSignature').prop('checked')) {
    $('.summernote').summernote('code', email_body + signatureWithBreaks);
}else{
      

   var updatedContent = email_body.replace(/<br><br><div class="signature-class">[\s\S]*?<\/div>/g, '').trim();
     $('.summernote').summernote('code', updatedContent + deSignature);
                  
}
        } else {
            console.error('Template data is empty');
            $('#template_subject').val('');
            $('.summernote').summernote('code', '');
        }
    },
        error: function (error) {
            console.error('Error fetching data:', error);
        }
    });
    }
});

        // Open the modal for adding a new contact
        $('#addNewContactBtn').click(function() {
            $('#addContactModal').modal('show');
        });
        $('#best_practices').click(function() {
            $('#best_practices_model').modal('show');
        });

        // Handle form submission for adding a new contact
        var csrfToken = $('meta[name="csrf-token"]').attr('content');

    // Add CSRF token to all AJAX requests
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': csrfToken
        }
    });

 $('#addContactForm').submit(function (e) {
    e.preventDefault();

    var formData = $(this).serialize(); // Serialize the form data

    $.ajax({
        url: '{{ route("user.introduction-email.store_contact_introemails") }}', // Route to the controller method
        method: 'POST',
        data: formData,
        success: function (response) {
            if (response.success) {
                alert(response.message); // Display success message
                $('#addContactModal').modal('hide'); // Close the modal
                updateRecipientList(); // Refresh the contact list
            } else {
                alert(response.message); // Display the message if response.success is false
            }
        },
        error: function (xhr) {
            
            // Check if the status is 422 (validation error)
            if (xhr.status === 422) {
                // Get the validation errors from the response
                var errors = xhr.responseJSON.errors;
                // alert(errors);

                // Check if the email field has an error
                if (errors && errors.email) {
                    alert('mail is not unique'); // Show the email error message in the alert
                } else {
                    alert('An error occurred while adding the contact. Please try again later.'); // Generic error message if no email error
                }
            } else {
                // For any other errors, show a generic error message
                alert('An error occurred while adding the contact. Please try again later.');
            }
        }
    });
});


    
   $('#sendMailForm').on('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    var formData = $(this).serialize(); // Serialize the form data to send it via Ajax

    // Show the loading spinner
    $('#loadingSpinner').show();

    $.ajax({
        url: '{{ route("user.sendMailtointromem") }}', // Your route
        method: 'POST',
        data: formData,
        success: function (response) {
            // If successful, reload the page
            // This will trigger a new request and the session flash message will be available
            $('#loadingSpinner').hide(); // Hide the spinner once the request is successful
           window.location.href = '{{ route("user.listview.inboxfrom_intro") }}'; 
        },
        error: function (response) {
            
            alert(response.responseJSON.messege);
            // If there are errors, hide the spinner and show the error message
            $('#loadingSpinner').hide(); // Hide the spinner if there is an error
           $('.notes_replace').addClass('d-none');
            $('#error-message').show();
           $('#error-message').html(response.responseJSON.messege);

        }
    });
});

    });
</script>

@endsection
sendmail.blade (1).php
Displaying sendmail.blade (1).php.