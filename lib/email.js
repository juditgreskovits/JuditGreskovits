validateEmail = function(email) {
  var errors = {};

  if(!email.name) {
    errors.name = "Please fill in your name";
  }

  if(!email.email) {
    errors.email = "Please fill in your email";
  }
  else {
    var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegEx.test(email.email)) {
      errors.email = "Please enter a correct email address";
    }
  }

  if(email.phone) {
    var phoneRegEx = /^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/;
    if(!phoneRegEx.test(email.phone)) {
      errors.phone = "Please enter a correct phone number";
    }
  }

  if(!email.message) {
    errors.message = "Please add a message";
  }

  return errors;
}

// In your server code: define a method that the client can call
Meteor.methods({
  sendEmail: function (emailAttributes) {

    var to = 'juditgreskovits@gmail.com';
    var from = emailAttributes.email;
    var subject = 'Contact email from ' + emailAttributes.name;
    var text = emailAttributes.message;
    text += '\n\n' + emailAttributes.email;
    if(emailAttributes.phone) {
      text += '\n\n' + emailAttributes.phone;
    }

    console.log('to = ' + to + ' from = ' + from + ' subject = ' + subject + ' text = ' + text);

    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});