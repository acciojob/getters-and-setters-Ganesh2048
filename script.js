//complete this code
class Person {
get name(){
	return this.name;
}
set age(age){
	return this.age=age;
}
}
class Student extends Person {
	
	study(){
		console.log(`${super.name} is studying`);
	}
	
}

class Teacher extends Person {
	
	teach(){
		console.log(`${super.name} is teaching`);
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
