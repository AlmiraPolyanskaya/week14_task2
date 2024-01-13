const initialGrades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const grades = initialGrades.map(() => {
    return Math.floor(Math.random() * 100);
});
console.log(grades);

let gradesSum = 0;
grades.forEach((grade) => gradesSum += grade);
const averageGrade = (gradesSum / grades.length).toFixed(2);
console.log('Cредний балл студентов: ' + averageGrade);

console.log('Максимальный балл среди студентов: ' + Math.max(...grades));
console.log('Минимальный балл среди студентов: ' + Math.min(...grades));

const goodStudents = grades.filter(item => item >= 60);
console.log('Количество студентов, получивших положительную оценку:' + goodStudents.length);
console.log(`Количество студентов, НЕ получивших положительную оценку: ${grades.length - goodStudents.length}`);

const badStudents = grades.filter(item => item < 60);
console.log('Количество студентов, получивших отрицательную оценку:' + badStudents.length);
console.log(`Количество студентов, НЕ получивших отрицательную оценку: ${grades.length - badStudents.length}`);

const letterGrades = grades.map(item => {
    if (item >= 80 && item <= 100) return 'A';
    if (item >= 60 && item <= 79) return 'B';
    if (item >= 40 && item <= 59) return 'C';
    if (item >= 20 && item <= 39) return 'D';
    else { return 'E' }
});
console.log(letterGrades);
