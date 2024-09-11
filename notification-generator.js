function sendNotification(email) {
    if(typeof email !== 'string' || email.split('@').length !== 2){
        return "Invalid Email";
    }
    let separate = email.split('@');
    let userName = separate[0];
    let domainName = separate[1];

    let notification = userName + ' sent you an email from ' + domainName;
    return notification;
}

