class Malade {
    constructor(nom, maladie, argent) {
        this.nom = nom,
            this.maladie = maladie,
            this.argent = argent,
            this.etatSante = "malade",
            this.poche = []

        this.leavePlace = (depart) => {
            depart.visiteurs.splice(depart.visiteurs.indexOf(this))
            console.log(`${this.nom} sort de ${depart.nom}`)
        }

        this.goTo = (arrivee) => {
            arrivee.visiteurs.push(this)
            console.log(`${this.nom} se rend à  ${arrivee.nom}`)
        }

        this.prendreTraitement = () => {
            this.etatSante = "Guéri"
        }

        this.mourir = (lieu) => {
            this.etatSante = "mort",
                lieu.tombes.push(this)
            console.log(`${this.nom} meurt et se fait enterrer au cimetière`, lieu.tombes)
        }

        this.payer = (receveur, prix) => {
            this.argent -= prix
            receveur.argent += prix
            console.log(`${this.nom} vient de payer ${receveur.nom}. Il lui reste désormais : ${this.argent} €`)
        }

    }

}

class Diagnostic {
    constructor(nom, traitement) {
        this.nomMaladie = nom,
            this.traitement = traitement
    }
}

class Traitement {
    constructor(nom, prix) {
        this.nom = nom
        this.prix = prix
    }
}

export { Malade, Diagnostic, Traitement }
