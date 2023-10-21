const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

function usernameValidation(){
    const userResult =  usernamePattern.test(event.target.value);
    if(userResult)
    {
        event.target.setAttribute("class" , "accepted");
    }
    else{
        event.target.setAttribute("class" , "rejected");
    }
}

function feedbackValidation(){
    const feedbackResult = feedbackPattern.test(event.target.value);
    if(feedbackResult)
    {
        event.target.setAttribute("class" , "accepted");
    }
    else{
        event.target.setAttribute("class" , "rejected");
    }
}