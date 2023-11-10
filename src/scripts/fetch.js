const apiURL = 'https://api.perapian.my.id/app/juan';

fetch(`${apiURL}/en/blog`,
{
    headers : {
        'x-api-key' :  'CANDLE-d3f1ab6d',
        'accept' : 'application/json'
    }
}).then(res => {
    return res.json();
}).then(data => {
    console.log(data);
});