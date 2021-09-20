


const Peças = ['la', 'bla bla', 'bla bla bla', 'le', 'ble ble','ble ble ble','li','bli bli', 'bli bli bli', 'lo']
    if (Peças.length <= 10){
        console.log("Liberado para pesagem")
    } else {
        console.log('Capacidade insuficiente')
    }

console.log('quantidade de caracteres')
 for (let quant = 0; quant < Peças.length; quant++){
     const atual = Peças [quant]
     if(atual.length < 3){
         console.log(atual + ' :Coloque um nome superior a 3 caracteres')
     } else {
         console.log(atual + ' :Esse nome foi liberado para cadastro')
     }
 }

 console.log ('peso do produto')
    const PesoDaPeca = 50;
if (PesoDaPeca >= 100){
    console.log('peso suficiente')
} else {
    console.log('peso insuficiente')
}