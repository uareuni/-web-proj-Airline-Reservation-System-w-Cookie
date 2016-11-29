function setCookie(cName, cValue, cDay)
{
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function isExistCookie()
{
    return ((getCookie('username') != "") && (getCookie('password') != "")) ? 'true' : 'false';
}

function redirectPhase()
{
      var username = getCookie('username');
      var password = getCookie('password');

      var side = getCookie('side');
      var location = getCookie('location');

      var destination = unescape(getCookie('destination')); // unescape : 불러올때 한글깨짐 방지
      var dish = getCookie('dish');
      var beverage = getCookie('beverage');

      var card = getCookie('card');
      var cardNum = getCookie('card_num');

      // conditionally redirectiton
      if((username == "") || (password == "")){
          window.location = "login.html";
      } else if((side == "") || (location == "")) {
          window.location = "seat.html";
      } else if((destination == "") || (dish == "") || (beverage == "")) {
          window.location = "dish.html";
      } else if((card == "") || (cardNum == "")) {
          window.location = "card.html";
      } else {
          window.location = "submit.html";
      }
}

function isRedirectable(key1, key2, key3)
{
    // overloading 구현
    if(typeof key3 === 'undefined')
    {
        if((getCookie(key1) == "") || (getCookie(key2) == ""))
        {
            return "false";
        }
        return 'true';
    }
    else
    {
        if((getCookie(key1) == "") || (getCookie(key2) == "") || (getCookie(key3) == ""))
        {
            return "false";
        }
        return 'true';
    }
}

function alertAllCookies()
{
  var username = getCookie('username');
  var password = getCookie('password');
  var side = getCookie('side');
  var location = getCookie('location');
  var destination = unescape(getCookie('destination')); // unescape : 불러올때 한글깨짐 방지
  var dish = getCookie('dish');
  var beverage = getCookie('beverage');
  var card = getCookie('card');
  var cardNum = getCookie('card_num');

  alert(
        'YourID : ' + username + '\n'
      + 'YourPW : ' + password + '\n'
      + 'Seat Preference : ' + side + '\n'
      + 'Seat Location : ' + location + '\n'
      + 'Destination : ' + destination + '\n'
      + 'Dish : ' + dish + '\n'
      + 'Beverage : ' + beverage + '\n'
      + 'Card : ' + card + '\n'
      + 'Card Number : ' + cardNum
  );
}
