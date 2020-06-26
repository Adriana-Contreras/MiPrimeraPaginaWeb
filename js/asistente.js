
if (annyang) {

  //Variable para almacenar las voces de nuestro sistema.
  var voices;

  //Inicializamos utter.
  var utter = new SpeechSynthesisUtterance();
  utter.rate = 1;
  utter.pitch = 0.5;
  utter.lang = 'es-ES';

  //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
};

  //Definimos los comandos a utilizar.
  var commands = {
    'hola adri': function () {
      utter.text = "Hola usuario";
      //Setea la voz que queremos usar en base a nuestra lista.
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);

      
    },
    'como estas': function () {
      utter.text = "Muy bien!";
      utter.voice = voices[2];
      window.speechSynthesis.speak(utter);
    },
    "hola": function () {
      utter.text = 'hola, cual es tu nombre?';
      utter.voice = voices[3];
      window.speechSynthesis.speak(utter);
      //Guarda el nombre que le decimos por voz.
      annyang.addCallback('result', function (phrases) {
          //Imprime el nombre por consola.
          console.log("Nombre: ", phrases[0]);
          //Para el evento result.
          annyang.removeCallback('result');
          //Nos dice hola + el nombre que le digamos por voz.
          utter.text = 'Hola, ' + phrases[0];
          window.speechSynthesis.speak(utter);
      });
  },
   
    'saludo': function () {
        utter.text = 'hola buenos días!';
        utter.voice = voices[0];
        window.speechSynthesis.speak(utter);
      },
    //Array que devuelve aleatoriamente un elemento del array, en este caso un chiste.
    "cuentame un chiste": function () {
      chistes = [
        "Por qué las focas del circo miran siempre hacia arriba?   Porque es donde están los focos.",
        "Estas obsesionado con la comida!   No se a que te refieres croquetamente.",
        'Por que estás hablando con esas zapatillas?   Porque pone "converse"',
        'Buenos dias, me gustaria alquilar "Batman Forever".   No es posible, tiene que devolverla tomorrow.',
      ];
      utter.text = chistes[Math.floor(Math.random() * chistes.length)];
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);
    },
    "dame una descripcion": function () {
      utter.text = "En esta pagina te mostraremos el arte de realizar videojuegos qué son un medio de expresión artística tambien veras los conocimientos principales en el desarrollo y los muchos que aún faltan por descubrir sé parte de nuestra comunidad";
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);
    },
    "descripcion": function () {
      utter.text = "En esta pagina te mostraremos el arte de realizar videojuegos qué son un medio de expresión artística tambien veras los conocimientos principales en el desarrollo y los muchos que aún faltan por descubrir sé parte de nuestra comunidad";
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);
    },
    "como me registro": function () {
      utter.text = "primero ve al formulario de registro en el primer campo ingresa tu nombre, apellido, email y por ultimo agrega una contraseña y presiona enviar ";
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);
    },
    "ayuda": function () {
      utter.text = "si eres nuevo activa el asitente de voz ";
      utter.voice = voices[0];
      window.speechSynthesis.speak(utter);
    },


    'reproducir': function() {
      
      var waitTime = 150;
      setTimeout(function () {      
          if ($('#reproductor').get(0).paused) {
            $('#reproductor').get(0).play();
          }
        }, waitTime);
      console.log("reproducir");
      },
     'pausar': function() {
        $('#reproductor').get(0).pause();
      console.log("pausar");
      }



    
  
  };

  //Esto nos sirve para ver que escucha el programa en tiempo real.
  /*
    annyang.addCallback('result', function(phrases) {
      console.log("I think the user said: ", phrases[0]);
      console.log("But then again, it could be any of the following: ", phrases);
       });
       */

  //Sumamos todos los comandos a annyang.
  annyang.addCommands(commands);

  //Annyang comienza a escuchar.
  annyang.start({ autoRestart: false, continuous: true });
  
 }
    

