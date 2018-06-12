# mod1-code-review-boating-school

Welcome to Boating School!  A Spongebob activity that simulates a system that tracks the Boating Tests happening.  We have three models - `Student`, `Instructor`, and `BoatingTest`.

Associations:

* An `Instructor` has many `BoatingTests`

* A `Student` has many `BoatingTests`

* A `BoatingTest` belongs to a `Student` and an `Instructor`

`Student` class:
* should initialize with
    - `first_name`
    - `last_name`
* `Student.all` should return all of the student instances
* `Student.full_names` should return an array of all of the students' full names
* `Student#add_boating_test` should initialize a new boating test with
    - `Student` (Object)
    - a boating test name (String)
    - a boating test status (String)
    - `Instructor` (Object)
* `Student.find_student` will take in a student's full name and output that student's object


`BoatingTest` class:
* should initialize with:
    - `Student` (Object)
    - a boating test name (String)
    - a boating test status (String)
    - `Instructor` (Object)
* `BoatingTest.all` returns an array of all boating tests

`Instructor` class:
* init with name
* `Instructor.all` should return all instructors
* `Instructor.fail_student` should take in a student name and test name and should return status failed


Run `ruby tools/console.rb` in console to seed

Here is some example seed data:

`spongebob = Student.new("Spongebob", "Squarepants")`
`patrick = Student.new("Patrick", "Star")`

`puff = Instructor.new("Ms.Puff")`
`krabs = Instructor.new("Mr.Krabs")`

`test1 = patrick.add_boating_test("Don't Crash 101", "pending", puff)`
