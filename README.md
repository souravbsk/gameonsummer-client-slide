# b712-summer-camp-client-side-souravbsk

# Game On Summer

### Various sports classes are conducted during summer vacations.

- technology ,

  - react, react router, firebase, daisy ui, swiperjs, axios, tanstack query, stripe, moment, react helmet, react, timeline, sweetalert, react hook form, spring animate

- 3 layer dashboard apply in this website
- Header :
  There is a header which has 3 pages, Home, Instructor, Class, and when the user logs in, they will see the dash board and profile otherwise they can see the sign in page.
- Footer : a beautiful footer apply apply where you can see contact detail, social link and some quick link

#### Home page overview

    - Apply A Slider Banner
    - Popular Classes Section : where you see top 6 classes base on their student ,
    - popular instructor section : where you see top 6 instructor base on each instructor all classes total student in a slider option
    - our event : where you see some events in timeline

#### Instructor Page Overview

    - On this page you can see all instructor cards, and each card has a button. (see Classes).
    - If you click on that button, you can see all the classes of that instructor

#### Classes Page Overview

    -On this page you can see the approved classes of all instructors
    -if you are not student . your role  admin or instructor your Enroll button will be disabled.
    -with out login you can't enrol classes

#### login page
    -a beautiful login page apply with firebase
    - you can login email and password
    - also you can login with gmail 
    - you also redirect login page to sign up page    

#### Sign Up page

    -a beautiful sign page apply with firebase
    - you can sign up with email and password
    -also sign up with google
    -if you are a new user and sign in with email password then you need to proved some information 
    - Name, Email, password, phone number, address, photo url, gender 
    - password must be 6 corrector , One UpperCase, and One special Corrector 
        -password example: 0147Ss@




- Dark Mood Light mood apply

## Student Dashboard 
    -private route only student can access

- only student can enroll classes after login
- Items added to the cart can be viewed on the My Selected  Classes page
- and pay for each class with stripe 

- after payment  , status payment success class are show in my enroll classes

- Cards that have been paid for will show up on several properties' payment history pages along with the transaction ID.

- If the payment is successful, the available seats of the class for which payment is made will be reduced by 1. And the enrollment number will increase by 1


## Instructor Dashboard
    - private route and only instructor can access this page
- instructor have 2 page,
- add a classes: where a instructor can upload a classes, 
    - classes default status is pending, and waiting for admin review
- MY classes: where each instructor can watch their uploaded classes and also see admin review to classes status: (pending / approved/ denied)

## Admin Dashboard,
    - private route and only admin can access this page
- admin have two page
- Manage classes
    - after instructor upload their classes, admin can  manage classes status from manage classes page
    - also review classes , and want to change class status approved, denied, and also send a feed back .. this feedback see only instructor

- manage users: 
  - when a users create a account . the users default role is student 
  - admin can update their role  like instructor and student


