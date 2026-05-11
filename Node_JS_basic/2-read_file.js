const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    const students = {};
    let total = 0;

    for (const line of lines) {
      const parts = line.split(',');

      const field = parts[3];
      const firstname = parts[0];

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstname);
      total += 1;
    }

    console.log(`Number of students: ${total}`);

    for (const field in students) {
      const list = students[field];
      console.log(
        `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
