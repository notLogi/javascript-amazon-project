const xhr = new XMLHttpRequest();//creates a http message to backend(the receiver)


xhr.addEventListener('load', () =>{
    console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');//type of message, GET(info from backend), where to send\
xhr.send();
//xhr.response();//THIS IS ASYNC CODE