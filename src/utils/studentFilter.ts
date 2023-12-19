import type { Student } from "../types/student";

export const getStudentOrderedListByLastName = (students: Student[]) => {
    // create an array for each letter of the alphabet for the lastname
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const studentsByLastName: Student[][] = alphabet.map(() => []); 
    // for each student, add it to the corresponding array
    students.forEach((student) => {
        const firstLetter = student.lastName[0].toLowerCase();
        const index = alphabet.indexOf(firstLetter);
        studentsByLastName[index].push(student);
    });
    // return the array of arrays
    return studentsByLastName;
}