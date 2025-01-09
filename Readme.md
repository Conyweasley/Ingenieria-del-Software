# Ingenieria del Software - Laboratorio

El sistema consta de una implementación web del juego multijugador “La Cosa” cuyas reglas pueden consultarse en el siguiente [enlace](Reglas_del_Juego_LaCosa.pdf). 


En este proyecto se utilizaron metodologías ágiles (SCRUM) y tecnologías modernas para el desarrollo de software.

Más información de como se llevó a cabo el proyecto. [Metodología](Laboratorio.pdf)

### Proposito del Laboratorio
*  Diseñar e implementar un sistema que soporte un juego llamado "La Cosa". Este juego tiene dinámicas en las que los jugadores asumen roles (humanos, infectados o "La Cosa") e interactúan mediante cartas y reglas predefinidas


---
Para iniciar a jugar, el usuario debe ingresar su nombre, el cual le sirve como identificador de ahora en adelante. 
Apenas el jugador se identifique, este podrá entrar al lobby; en donde se encuentran las distintas partidas. En este punto el jugador
 puede elegir crear una nueva partida o unirse a una de las existentes. Las partidas pueden tener entre 4 a 12 jugadores. 
 Una característica de las partidas es que estas pueden tener contraseña, siendo totalmente opcional para el usuario. De manera tal que si el usuario que crea una partida quiere que su partida sea privada, puede escoger una contraseña y otros jugadores 
 solo pueden acceder a la misma ingresando la contraseña escogida. 
## Desarrollo del Proyecto.

Los aspectos claves fueron:
### Metodología de trabajo
* Uso de SCRUM con tres Sprints de 3 semanas cada uno.
* Implementación de un backend con FastAPI para manejar la lógica de negocio y un frontend con React para la interacción del usuario.
* Conexión entre backend y frontend utilizando HTTP REST y WebSockets para actualizaciones en tiempo real.

### Estructura de Equipos
* Los equipos asignaron roles de Product Owner (PO) y Scrum Master (SM) para garantizar comunicación efectiva y seguimiento del progreso.
* Organización del trabajo en plataformas colaborativas como GitHub (con repositorios específicos para frontend y backend) y JIRA para la gestión de tareas.

### Desafios Técnicos
* Implementación de la lógica del juego, como mezclar cartas, repartir manos, y gestionar turnos.
* Desarrollar y probar funcionalidades clave, como listar partidas, unirse a partidas, jugar cartas específicas (ej. lanzallamas) y manejar websockets para interacción en tiempo real entre jugadores.
* Asegurar modularización del código, documentación adecuada y cobertura de pruebas unitarias para cada funcionalidad desarrollada.


### Evaluación

* El proyecto fue evaluado en cada Sprint mediante demos, donde los avances eran revisados por los profesores.
* La calificación no dependió únicamente del resultado final, sino de la participación activa, la calidad del código, y la adherencia al proceso de desarrollo.

### Integrantes

---

### Front
* Marcos Betancourt
* Gómez Constanza
* Andres Sadir

### Back
* Iván Nieva
* Mateo Lione Stuto
* Joaquín Origlia
* Ricardo Jeiel Arguello
