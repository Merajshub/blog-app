
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';

import { Hono } from 'hono';

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


// Middleware - checking all route which is using this starting route /api/v1/blog/...
// app.use('/api/v1/blog/*',async (c,next)=>{
// 	const header = c.req.header("authorization") || "";
// 	// Bearer token = ['Bearer','token'] 
// 	const token = header.split(" ")[1];
// 	const response = await verify(token, c.env.JWT_SECRET)
// 	console.log(response);
	
// 	if(response.id){
// 		 next()
// 	}else{
// 		c.status(403)
// 		return c.json({error: "unauthorised header"})
// 	}
// })


app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)



export default app
