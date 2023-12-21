import type { Student } from "../types/student";

export const getStudentOrderedListByLastName = (students: Student[], filterLetters: String[]) => {
    console.log("je passe ici")
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

    // remove from the array, the arrays not corresponding to the letters in filterLetters
    if(filterLetters.length === 0) return studentsByLastName;
    const filteredStudentsByLastName: Student[][] = [];
    filterLetters.forEach((letter) => {
        const index = alphabet.indexOf(letter.toLowerCase() as string);
        filteredStudentsByLastName.push(studentsByLastName[index]);
    });

    return filteredStudentsByLastName;
}