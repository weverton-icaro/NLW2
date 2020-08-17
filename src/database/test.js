const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  //Inserir Dados
  proffyValue = {
    name:"Weverton Icaro", 
    avatar: "https://avatars2.githubusercontent.com/u/59031748?s=460&u=af8621b044ee39a90b71da32010737c57e9b1c4f&v=4", 
    whatsapp: "61994087588", 
    bio: "Desenvolvedor apaixonado pelas novidades tecnológicas.<br><br>Busca sempre por novas experiências que incentivem as pessoas a não desistirem se suas conquistas.", 
  }

  classValue = {
    subject: 1, 
    cost: "20,00",
    // Proffy id virá do próprio banco de dados
  }

  classScheduleValues = [
    //class_id virá pelo banco de dados, após cadastrarmos a class
    {
    weekday: 1, 
    time_from: 720, 
    time_to: 1220 
    },
    {
      weekday: 0, 
      time_from: 520, 
      time_to:  1220
    }
  ]

  //await createProffy(db, {proffyValue, classValue, classScheduleValues})

  //Consultar dados inseridos

  //todos os proffys
  const selectedProffys = await db.all("SELECT * FROM proffys")
  //console.log(selectedProffys)

  // Consultar classes de um determinado proffy
  // e trazer junto os dados do proffy
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  //console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
  // o horário do time_from (8h) precisa ser antes ou igual ao horário solicitado
  // o time_to precisa ser acima
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)

  //console.log(selectClassesSchedules)

})