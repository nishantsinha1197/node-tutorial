In bigFile.js code is written to create file bigFile.txt and in which data is passed

stream concept is integrated with http to show the response and size of the file :

1. const text = fs.readFileSync('./bigFile.txt','utf-8');
    res.end(text)

    Using the first approach we were getting large file size . 
    
2.
const fileStream = fs.createReadStream('./bigFile.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
  We use another method , size remains the same but now we are getting header response as chunked
