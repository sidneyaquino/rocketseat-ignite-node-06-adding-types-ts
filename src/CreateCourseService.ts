interface Course {
   name: string ;
   educator: string ;
   duration?: number ;
};

class CreateCourseService {
   execute({name, educator, duration}: Course){
      console.log(name, educator, duration = 10);
   }
}

export default new CreateCourseService();