class TrainersService {

    constructor() {
        this.trainers = [];
        this.generateData();
    }

    generateData() {
        this.trainers = [
            { id: 0, name: "Corina", age: 11, region: 1 },
            { id: 1, name: "jose montoya", age: 12, region: 1 },
            { id: 2, name: "ash ketchum", age: 10, region: 2 },
            { id: 3, name: "gary oak", age: 10, region: 3 },
            { id: 4, name: "brock", age: 10, region: 4 },
            { id: 5, name: "misty", age: 10, region: 5 },
        ];
    }
    find() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const allTrainers = this.trainers;
                resolve(allTrainers);
            }, 0);
        })
    }

    findWithParams(region, age) {
        region ? region = parseInt(region) : region = null
        age ? age = parseInt(age) : age = null
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const allTrainers = this.trainers.filter(element => element.age === age || element.region === region) ;
                resolve(allTrainers);
            }, 0);
            console.log(this.trainers);
        })
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const trainer = this.trainers.find(trainer => trainer.id === parseInt(id));
                resolve(trainer);
            })
        }, 1000);
    }

    create(newTrainer) {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.trainers.push(newTrainer);
                resolve();
            })
        }, 1000);
    }

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.trainers.findIndex(trainer => trainer.id === parseInt(id));
                if (index !== -1) {
                    const copyTrainer = { ...this.trainers[index] };
                    this.trainers[index] = { ...copyTrainer, ...body };
                    resolve();
                }
            })
        }, 1000);
    }

    updateComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.trainers.findIndex(trainer => trainer.id === parseInt(id));
                if (index !== -1) {
                    const copyTrainer = { ...this.trainers[index] };
                    this.trainers[index] = { ...copyTrainer, ...body };
                    resolve();
                }
            })
        }, 1000);
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.trainers.findIndex(trainer => trainer.id === parseInt(id));
                if (index !== -1) {
                    this.trainers.splice(index, 1);
                    resolve();
                }
            })
        }, 1000);
    }

}

module.exports = TrainersService;