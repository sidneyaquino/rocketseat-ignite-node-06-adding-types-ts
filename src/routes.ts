import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(resquest: Request, response: Response){
   CreateCourseService.execute({
      name: 'Node', 
      educator: 'Dani', 
      // duration: 30, 
   });
}