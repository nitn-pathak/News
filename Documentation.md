 # Functions used in Signup Component

  1)  fetchdata() -It will fetch all the user from mock api.

  2)  filter() - It will check if the user is alredy registered or not.
                 if user is alredy logined with same email id it will not
                 register that user.
    
  3) register() - Help user to register username, email id ,password
    to mock api.


# Toastify functions :-

  1) notifySuccessfull() - it will display toast in top-left that user is
                          successfully registred.
                          
  2) notifywarning() - it will display toast in top-left that input fields cant
                      be empty.

  3) notifyRegisteredAlredy() - it will display toast in top-left that user is
                               registered alredy.

  4) notifyPasswordLength() -it will display toast in top-left that password
                         length is to short.    



 # Functions used in Signin Component :-
 
  1) fetchdata() - It will fetch all the users from mock api.
   
  2) filter() - It will check if the user email is alredy registered or not.
               if user is alredy registered with same email id and
               password. It will store username in localstorage and
               navigate that user to home page.                     


 #  Toastify functions :-
   1) notify() - it will display toast in top-left that user is not registered or
                 wrong password.

 #   Functions used in Header Component :-
   1) logout() - it will navigate the user to signin page and remove the
               username from localstorage.


# Functions used in Card Component :-
  1) useSelector() - it a allows you to extract data from the redux store
                  for using inside the component      
                          