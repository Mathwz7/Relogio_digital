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
        if(horas < 10){
            horas =` 0${horas}`;
        }
        if(minutos < 10){
            minutos =` 0${minutos}`;
        }
        if(segundos < 10){
            segundos =` 0${segundos}`;
        }

        time.innerHTML = `
        ${horas} : 
        ${minutos} :
        ${segundos}
        `
    }
}