class Relogio{
    constructor(horas, minutos, segundos){
        this.time = document.getElementById('value');
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
        this.setAgora();
    }
  
    setAgora(){
        let time = this.time
        let horas = this.horas 
        let minutos = this.minutos 
        let segundos = this.segundos
        setTimeout(()=>{
            time.innerHTML = `
            ${horas} : 
            ${minutos} :
            ${segundos}
            `
        }, 500);
    }
}