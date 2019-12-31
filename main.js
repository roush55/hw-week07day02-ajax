let mydiv=document.getElementById('div1');
axios.get('https://api.imgflip.com/get_memes')
        .then(resp =>{
            let res=resp.data
            res.data.memes.forEach(element=>{
            mydiv.innerHTML +=`<p><a href= ${element.name}>MEMES Name</a></p>
            <img src=${element.url} width =100 hieght=100/> 
            `
        
            //console.log()
        })})
	    	.catch(err => {
            console.log('Error happened during fetching!', err);
        })
       