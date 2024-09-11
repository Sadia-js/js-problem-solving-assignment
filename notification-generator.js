function sendNotification(email) {
    if(typeof email !== 'string' || email.split('@').length !== 2){
        return "Invalid Email";
    }
    let notification = email.split('@');
    notification = notification[0] + ' sent you an email from ' + notification[1];
    return notification;
}
