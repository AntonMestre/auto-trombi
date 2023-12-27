import { defineStore } from 'pinia';
import type { Student } from '@/types/student'
import data from '@/data/persistance.json';

export const useStudents = defineStore({
  id: 'students',
  state: () => ({
    students: [] as Student[]
  }),
  actions: {
    initializeStudents() {
      const storedStudents = localStorage.getItem('students');
      if (!storedStudents) {
        this.students = data.students as Student[];
      }
    },
    addStudent(newStudent: Student) {
      this.students.push(newStudent);
      localStorage.setItem('students', JSON.stringify(this.students));
    },
    update(newValue: Array<Student>) {
      this.students = newValue;
      localStorage.setItem('students', JSON.stringify(newValue));
    },
  },
  getters: {
    get() : Array<Student> {
      return this.students;
    },
  },
});