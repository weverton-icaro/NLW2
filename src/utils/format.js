const subjects = [
  "JavaScript",
  "ReactJS",
  "React Native",
  "VScode",
  "HTML",
  "CSS",
  "NodeJS",
  "Python",
  "Java",
  "PHP",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

//funcionalidade da aplicação
function getSubject(subjectsNumber) {
  const position = +subjectsNumber - 1
  return subjects[position]
}

function convertHoursToMinutes (time) {
  const [hour, minutes] = time.split(":")
  return Number((hour * 60) + minutes)
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}