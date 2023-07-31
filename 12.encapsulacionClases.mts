interface Avenger{
    name: string,
    powerScore: number
    wonBattles: number
    age: number
    battle: (enemy: Avenger, win: boolean) => void
}

class Avenger implements Avenger{
    // readonly name: string
    // #powerScrore: number //Esta es la forma oficial de ts para hacer privado pero se verifica despues de ejecucion (runtime) pero lo compila en privado
    // private powerScore: number //De esta manera nos advierte mientras lo estamos codificando (devTime) pero no lo compila en privado
    // private readonly wonBattles: number = 0
    // protected age: number = 0

    constructor(name: string, powerScore: number){
        this.name = name;
        this.powerScore = powerScore;
    }

    battle(enemy, win){
        if(win){
            this.wonBattles++,
            this.powerScore += 5
        }else{
            this.powerScore -= 5
        }
    }

    get fullName() {return `${this.name}, de poder ${this.powerScore}`}

    set power(newPower: number) {
        if(newPower <= 100){
            this.power = newPower
        }else{
            throw new Error('El poder no puede ser menor a 100')
        }
    }

}


const avenger = new Avenger('Spiderman', 200)

avenger.powerScore // Solo se puede acceder a ella en la clase ya que es privado