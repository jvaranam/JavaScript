var date = new Date();

var options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric"
};

date.toLocaleDateString("en", options);//en is language option, you may specify..
More Options and their examples....

 Option         Values and sample output

 weekday        narrow M
                short Mon
                long Monday

 year           2-digit 01
                numeric 2001

 month          2-digit 01
                numeric 1
                narrow J
                short Jan
                long January

day             2-digit 01
                numeric 1

hour            2-digit 12 AM
                numeric 12 AM

minute          2-digit 0
                numeric 0

second          2-digit 0
                numeric 0

timeZoneName    short 1/1/2001 GMT+00:00
                long 1/1/2001 GMT+00:00
                
                
                
.toLocaleDateString("en", {year: "numeric", month: "short",day: "numeric", weekday:"long", hour:"2-digit", minute:"2-digit"}).replace(/\s/g,'-')
