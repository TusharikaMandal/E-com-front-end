const express = require('express');
const path = require('path');

const app =express();
const publicPath = path.join(__dirname,'pocesses');

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get('/blog',(_,resp)=>{
    resp.sendFile(`${publicPath}/blog.html`);
})
app.get('/contact',(_,resp)=>{
    resp.sendFile(`${publicPath}/contact.html`);
})
app.get('/cart',(_,resp)=>{
    resp.sendFile(`${publicPath}/cart.html`);
})
app.get('/shop',(_,resp)=>{
    resp.sendFile(`${publicPath}/shop.html`);
})
app.get('/sproduct',(_,resp)=>{
    resp.sendFile(`${publicPath}/sproduct.html`);
})
app.get('*',(_,resp)=>{
    resp.sendFile(`${publicPath}/pagenotFound.html`);
})

app.listen(5000);