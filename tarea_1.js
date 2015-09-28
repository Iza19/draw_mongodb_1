/*
1) Baja el archivo grades.json y en la terminal ejecuta el siguiente comando:
$ mongoimport -d students -c grades < grades.json

2) El conjunto de datos contiene 4 calificaciones de n estudiantes. Confirma que se importoó 
correctamente la colección con los siguientes comandos en la terminal de mongo:
*/

>use students;
>db.grades.count()

/*
¿Cuántos registros arrojó el comando count?

Respuesta: 800

3) Encuentra todas las calificaciones del estudiante con el id numero 4
*/

db.grades.find({student_id: 4});

/*
Respuesta:
{ "_id" : ObjectId("50906d7fa3c412bb040eb587"), "student_id" : 4, "type" : "exam", "score" : 87.89071881934647 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb588"), "student_id" : 4, "type" : "quiz", "score" : 27.29006335059361 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb589"), "student_id" : 4, "type" : "homework", "score" : 5.244452510818443 }
{ "_id" : ObjectId("50906d7fa3c412bb040eb58a"), "student_id" : 4, "type" : "homework", "score" : 28.656451042441 }

4) ¿Cuantos registros hay de tipo exam?
*/

db.grades.find({"type":"exam"}).count();

/*
Respuesta: 200

5) ¿Cuantos registros hay de tipo homework?
*/

db.grades.find({"type":"homework"}).count();

/*
Respuesta: 400

6) ¿Cuantos registros hay de tipo quiz?
*/

db.grades.find({"type":"quiz"}).count();

/*
Respuesta: 200

7) Elimina todas las calificaciones del estudiante con el id numero 3
*/

db.grades.update({"student_id": 3},{$set:{"score":""}},{multi: true});

/*
Respuesta: WriteResult({ "nMatched" : 4, "nUpserted" : 0, "nModified" : 3 })

8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
*/

db.grades.find({$and: [{"type":"homework"},{"score":75.29561445722392}]});

/*
Respuesta:
{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100 
*/

db.grades.update({_id:ObjectId("50906d7fa3c412bb040eb591")},{$set:{"score":100}});

/*
Respuesta: WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

10) ¿A qué estudiante pertenece esta calificación.
*/

db.grades.find({_id:ObjectId("50906d7fa3c412bb040eb591")});

/*
Respuesta:
{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }

*/