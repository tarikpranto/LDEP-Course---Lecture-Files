function check(){
            var name  = document.getElementById('name');
            var phone = document.getElementById('cell');
            var email = document.getElementById('email');
            var username = document.getElementById('username');
            var pw    = document.getElementById('pass');
            var rpw   = document.getElementById('repass');
            

            


            if (name.value==''){
                document.getElementById('name_error').innerHTML="Please Enter Your Name";
                return false;
            }else{
                document.getElementById('name_error').innerHTML="";
            }
            if (phone.value==''){
                document.getElementById('phone_error').innerHTML="Please Enter Your Phone";
                return false;
            }else{
                document.getElementById('phone_error').innerHTML="";
            }

            // Email Part START //
            if (email.value==''){
                document.getElementById('email_error').innerHTML="Please Enter Your Email";
                return false;
            }else{
                document.getElementById('email_error').innerHTML="";
            }
            // Email Part END //

            //  USERNAME Part START //
            if (username.value==''){
                document.getElementById('user_error').innerHTML="Please Enter Your username";
                return false;
            }else{
                document.getElementById('user_error').innerHTML="";
            }
            // username Part END //



            if(pw.value==''){
                document.getElementById('pass_error').innerHTML="Please Enter Your Password";
            }
            else{
                document.getElementById('pass_error').innerHTML="";
            }

            if(rpw.value==''){
                document.getElementById('repass_error').innerHTML="Please Confirm Password";
                return false;
            }else if(pw.value != rpw.value){
                document.getElementById('repass_error').innerHTML="Password Didn't Match";
                return false;
            }
            else{
                document.getElementById('pass_error').innerHTML="";
            }
           
        }