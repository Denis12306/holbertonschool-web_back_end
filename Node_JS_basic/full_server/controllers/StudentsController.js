import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const dbFile = process.argv[2];

    readDatabase(dbFile)
      .then((data) => {
        let output = 'This is the list of our students\n';

        const fields = Object.keys(data).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        for (const field of fields) {
          output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
        }

        res.status(200).send(output.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbFile)
      .then((data) => {
        const list = data[major].join(', ');
        res.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
