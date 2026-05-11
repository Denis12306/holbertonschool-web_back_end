const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data
      .split('\n')
      .filter((line) => line.trim() !== '');

    lines.shift();

    const fields = {};
    let totalStudents = 0;

    for (const line of lines) {
      const student = line.split(',');

      const firstname = student[0];
      const field = student[3];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      const list = fields[field];
      console.log(
        `Number of students in ${field}: ${list.length}.
        List: ${list.join(', ')}`
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
