const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

const usernamePattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const userResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);
    
    //console.log(userResult, feedbackResult);

    if(userResult && feedbackResult){
        p.setAttribute("class", "success");
        p.textContent = "Feedback Submitted, Thank You!!";
        console.log("Done!");
    }else{
        p.setAttribute("class" , "error");
        p.textContent = "Please check Username and Feedback again..";
        console.log("Not Done..");
    }
});

// form.username.addEventListener("keyup" , (event) =>{
//     console.log(event);
// })


form.username.addEventListener("keyup" , (event) =>{
    const userResult = usernamePattern.test(event.target.value);
    if(userResult){
        form.username.setAttribute("class", "accepted");
    }
    else{
        form.username.setAttribute("class" , "rejected");
    }
});

form.feedback.addEventListener("keyup" , (event) =>{
    const feedbackResult = feedbackPattern.test(event.target.value);
    if(feedbackResult){
        form.feedback.setAttribute("class", "accepted");
    }
    else{
        form.feedback.setAttribute("class" , "rejected");
    }
});