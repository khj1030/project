const tbody = document.querySelector('tbody');

var requestURL ='https://unchae.com/get_post_data';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    var userData = request.response;
    showData(userData);
}

function showData(jsonObj) {
    var user_info = jsonObj;
        
    for (var i = 0; i < user_info.length; i++) {
        var myArticle = document.createElement('tr');
        var myH2 = document.createElement('td');
        var myPara1 = document.createElement('td');
        var myPara2 = document.createElement('td');
        var myPara3 = document.createElement('td');
        var myPara4 = document.createElement('td');

        myH2.textContent = user_info[i].post_id;
        myPara1.textContent =  user_info[i].post_writer;
        myPara2.textContent =  user_info[i].post_content;
        myPara3.textContent =  user_info[i].post_create_at;
        myPara4.textContent =  user_info[i].post_view;   

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);

        tbody.appendChild(myArticle);
    }
}            