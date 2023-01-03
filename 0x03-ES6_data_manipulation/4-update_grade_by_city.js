export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsFromCity = students.filter((item) => item.location === city);
  return studentsFromCity.map((item) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === item.id);
    return {
      ...item,
      grade: studentGrade.length ? studentGrade[0].grade : 'N/A',
    };
  });
}
