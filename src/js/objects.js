import { Malade, Diagnostic, Traitement } from './classes.js'


let marcus = new Malade("Marcus", "mal indenté", 100)
let optimus = new Malade("Optimus", "unsaved", 200)
let sangoku = new Malade("Sangoku", "err404", 80)
let darthVader = new Malade("DarthVader", "azmatique", 110)
let semicolon = new Malade("Semicolon", "syntaxError", 60)

let malIndente = new Diagnostic("mal indenté", "ctrl+maj+f")
let unsaved = new Diagnostic("unsaved", "saveOnFocusChange")
let err404 = new Diagnostic("err404", "CheckLinkRelation")
let azmatique = new Diagnostic("azmatique", "Ventoline")
let syntaxError = new Diagnostic("syntaxError", "f12+doc")

let ctrlmajf = new Traitement("ctrl+maj+f", 60)
let saveOnFocusChange = new Traitement("saveOnFocusChange", 100)
let CheckLinkRelation = new Traitement("CheckLinkRelation", 35)
let ventoline = new Traitement("Ventoline", 45)
let f12doc = new Traitement("f12+doc", 20)


let docteur = {
    nom: "Docteur Bernard",
    argent: "100",
    salleAttente: [marcus, optimus, sangoku, darthVader, semicolon],
    cabinet: [],

    grilleDiagnostic: [
        malIndente,
        unsaved,
        err404,
        azmatique,
        syntaxError
    ],


    patientIn(patientIn) {
        console.log(`${this.salleAttente[0].nom} rentre __ dans le cabinet du ${docteur.nom}`)
        this.cabinet.push(patientIn)
        this.salleAttente.splice(this.salleAttente.indexOf(patientIn), 1)

    },

    diagnostiquer(patient) {

        this.grilleDiagnostic.forEach(maladie => {
            if (maladie.nomMaladie == patient.maladie) {
                patient.poche.push(maladie.traitement)
                patient.etatSante = "En traitement"
                console.log(`${this.nom} détecte la maladie ${patient.maladie} chez  ${patient.nom} dont l'état est désormais "${patient.etatSante}"`)

            }
        })

    },

    patientOut(patient) {
        console.log(`${patient.nom} sort du cabinet du ${docteur.nom}`)
        this.cabinet.shift()
    }

}

let pharmacie = {
    nom: "Pharmacie",
    argent: 80,
    visiteurs: [],
    stockMedicament: [ctrlmajf, saveOnFocusChange, CheckLinkRelation, ventoline, f12doc],

    recevoir(patient) {
        this.stockMedicament.forEach(traitement => {
            if (patient.poche[0] == traitement.nom) {
                console.log(`La pharmacie a effectivement votre traitement ${traitement.nom} en stock qui coute ${traitement.prix}  `);

                if (patient.argent < traitement.prix) {
                    console.log(`Malheureusement il manque ${traitement.prix - patient.argent}€ à  ${patient.nom} pour payer son traitement.`);
                    patient.leavePlace(pharmacie)
                    patient.mourir(cimetiere)
                } else {
                    patient.payer(pharmacie, traitement.prix)
                    patient.prendreTraitement()
                    console.log(`Génial !  ${patient.nom} est guéri.`, patient);
                }
            }
        })

    }
}


let cimetiere = {
    nom: "cimetiere",
    tombes: []
}

export { docteur, marcus, optimus, sangoku, darthVader, semicolon, pharmacie, cimetiere }