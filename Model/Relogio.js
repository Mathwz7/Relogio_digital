class Relogio{
    constructor(time){
        this.time = time;
        this.initialize();
    }

    initialize(){
        this.setAgora();
        setInterval(()=>{
        this.setAgora();
        }, 1000);
    }
    
    setAgora(){
        let data = new Date();
        let horas = data.getHours();
        let minutos = data.getMinutes();
        let segundos = data.getSeconds();
        let time = this.time;

        time.innerHTML = `
        ${horas} : 
        ${minutos} :
        ${segundos}
        `
    }
}