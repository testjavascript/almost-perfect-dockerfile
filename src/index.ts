import express from "express";
import { Router, Request, Response, NextFunction, Application } from "express";


let app: Application = express();
app.listen(3000);
const router: Router = Router();
router.get("/demo", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(`Demo was called`);
    res
      .status(200)
      .json({ demo: true })
      .end();
  } catch (error) {
    next(error);
  }
});

process.on('SIGTERM', ()=>{
  console.log('siterm')
})



app.use(router);