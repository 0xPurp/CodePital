import { docteur, pharmacie } from './objects.js'

console.log(`Bienvenue à CODEPITAL `)
console.log(`Les malades sont dans la salle d'attente : `, docteur.salleAttente)

let patients = [...docteur.salleAttente]
console.log(`les patients : `, patients);



patients.forEach(patient => {
    console.log(`${patient.nom}`)
    docteur.patientIn(patient)
    docteur.diagnostiquer(patient)
    patient.payer(docteur, 50)
    docteur.patientOut(patient)

    patient.goTo(pharmacie)
    pharmacie.recevoir(patient)
})


