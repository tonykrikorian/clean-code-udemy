(() => {
  // arreglo de temperaturas celsius
  const arrayOfNums = [33.6, 12.34];
  const temperatureValues = [33.6, 12.34];

  // Dirección ip del servidor
  const ip = "123.123.123.123";
  const serverIpAddress = "123.123.123.123";

  // Listado de usuarios
  const people = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const emails = people.map((u) => u.email);
  const emailUsers = people.map((u) => u.email);

  // Variables booleanas de un video juego
  const jump = false;
  const isJumping = false;

  const run = true;
  const isRunning = true;

  const noTieneItems = true;
  const hasItems = true;

  const loading = false;
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const start = new Date().getTime();
  const startTime = new Date().getTime();

  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const end = new Date().getTime() - start;
  const finalTime = new Date().getTime() - start;

  // Funciones
  // Obtiene los libros
  function book() {
    throw new Error("Function not implemented.");
  }
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function BooksUrl(u: string) {
    throw new Error("Function not implemented.");
  }
  function getBooksService(u: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function areaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }
  function calculateSquareArea(s: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJobIfJobIsActive() {
    throw new Error("Function not implemented.");
  }
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
