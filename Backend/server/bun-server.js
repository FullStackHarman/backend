import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname == '/'){
            return new Response('Hello World!', {status: 200})
        }
        else if(url.pathname == '/backend-series'){
            return new Response('Hello from backend Series ',{status:200})
        }
        else{
            return new Response(`<h1>404 Not Found</h1>` , {status: 404})

        }
    },port:3000,hostname:'127.0.0.1'
})
