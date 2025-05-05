document.getElementById("btexemplo1").addEventListener("click", function() {
    document.getElementById("exemplo1").textContent = `
      class Animal {
        constructor(nome) {
          this.nome = nome;
        }
        falar() {
          console.log(this.nome + ' faz barulho!');
        }
      }

      const cachorro = new Animal('Cachorro');
      cachorro.falar();
    `;
  });

  document.getElementById("btexemplo2").addEventListener("click", function() {
    document.getElementById("exemplo2").textContent = `
      class Carro {
        constructor(modelo, cor) {
          this.modelo = modelo;
          this.cor = cor;
        }
        ligar() {
          console.log(this.modelo + ' está ligado!');
        }
      }

      const carro = new Carro('Fusca', 'azul');
      carro.ligar();
    `;
  });