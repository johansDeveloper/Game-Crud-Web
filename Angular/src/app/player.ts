export class Player {
    id: number;
    username: String;
    power: String;
    shield: String;
    life: number;
    //groupId: number;

    constructor(id: number, username: string, power: string, shield: string, life: number) {
        this.id = id;
        this.username = username;
        this.power = power;
        this.shield = shield;
        this.life = 0;
    }

    public attacks() {
        this.ballsAttack();
    }

    public defends() {
        this.onShield();
    }

    public optionalAction() {
        this.attacks();
        this.defends();
    }

    protected ballsAttack() {
        console.log("ball attack is use");

        this.life = this.life - 1;

        console.log(this.life);
    }

    protected onShield() {
        console.log("shield is active");


        let shields: String[] = ["shield1", "shield2", "shield3", "shield4"];
        let random =  Math.random() * (1 - 4) + 4;
        this.shield = shields[random];

        this.life = this.life + 1;

        console.log(this.life);
    }

    protected reduceLife(damage: number) {
        this.life = this.life - damage;

        return this.life;
    }

    public consultAction(interfaz: number) {

        let currentLife = this.life;

        let response = null;
        response = prompt("Digite A (atack) or S (shield)");

        if (response === "A") {
            this.attacks();
            this.reduceLife(interfaz);
        }
        if (response === "S") {
            this.defends();
        }


        return currentLife;

    }

    public run(interfaz: number) {

        let run = false;
        let crrntLife = 0;


        this.life = this.consultAction(interfaz);

        crrntLife = this.life;
        console.log(crrntLife);

        if (crrntLife >= 5) {
            run = true;
        }


        while (run) {
            this.consultAction(interfaz);
        }

        return 0;
    }

    public  getLife() {
        return this.life;
    }
}











