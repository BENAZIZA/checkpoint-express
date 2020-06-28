const express = require ('express');
const app = express();
app.use(date=(req,res,next)=>{
	let dateRequest=new Date()
	let dateDay=dateRequest.getDay()
	let dateHour=dateRequest.getHours()
	if (dateHour>=9&&dateHour<=17&&dateDay>=0&&dateDay<=5) 
	{
	next()	
	}
	else
	{
		res.send('site is not available')
	}
	
})
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/public/Home.html')
})
app.get('/contact',(req,res)=>{
	res.sendFile(__dirname+'/public/contact.html')
})
app.get('/services',(req,res)=>{
	res.sendFile(__dirname+'/public/Services.html')
})
app.listen(8080,(err)=>{
	if (err)
	{
		console.log('server is not running')
	}
	else
	{
		console.log('server is running')
	}
})