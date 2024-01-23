//complete this code
class Person {
	constructer(name,age)
	{
		this.name=name;
		this.age=age
	}
get name(){
	return this.name;
}
set age(age){
	return this.age;
}
}
class Student extends Person {
	study(){
		return '$(this.name) is studying';
	}
	console.log(study());
}

class Teacher extends Person {
	teach(){
		return '$(this.name) is teaching';
	}
	console.log(teach());
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
