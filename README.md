# API Hackató Saló Ocupació 2024

- [Descripció](#descripció)
- [Requisits previs](#requisits-previs)
- [Instal·lació](#instal·lació)
  - [Executar amb Docker](#executar-amb-docker)
  - [Executar sense Docker (opcional)](#executar-sense-docker-opcional)
- [Scripts disponibles](#scripts-disponibles)
- [Requisits complerts](#requisits-complerts)

## Descripció

Aquesta aplicació és una API per a la gestió d'usuaris i activitats desenvolupada per al Hackató Saló Ocupació 2024. El projecte està construït amb Node.js, Express.js, TypeScript i MongoDB amb l'ús de Mongoose com ORM. L'aplicació segueix els principis SOLID, i està dissenyada amb el patró MVC per assegurar escalabilitat i mantenibilitat. La seguretat està garantida mitjançant l'autenticació amb JWT, i s'han implementat validacions d'entrades amb Zod.

## Requisits previs

Abans de començar, assegura't de tenir instal·lats els següents programes al teu sistema:

- **Docker**: Pots descarregar-lo des d'[aquí](https://www.docker.com/products/docker-desktop/).
- **Docker Compose**: Normalment ja s'instal·la amb Docker Desktop.
- **Node.js** (només si vols executar el projecte sense Docker): Versió 18 o superior, [descarrega'l aquí](https://nodejs.org/).
- **MongoDB** (només si vols executar MongoDB localment, sense Docker): Pots instal·lar-lo des d'[aquí](https://www.mongodb.com/).
- **JWT** crea el teu

## Instal·lació

Segueix aquests passos per a posar en marxa el projecte:

### Executar amb Docker

1. **Clona el repositori** al teu ordinador:

   ```bash
   git clone https://github.com/el-teu-usuari/proba-2024.git
   cd proba-2024
   ```

2. **Construeix i engega els contenidors Docker**:

   Utilitza el següent comandament per a construir les imatges i iniciar els contenidors de Docker (tant per al servidor Node com per a la base de dades MongoDB):

   ```bash
   npm run docker:build
   npm run docker:up
   ```

   Això farà el següent:

   - Construeix la imatge de l'aplicació utilitzant el Dockerfile.
   - Engega un contenidor de MongoDB i un contenidor per al servidor Node.js.

3. **Verifica que l'API està funcionant**:

   Un cop els contenidors estiguin en funcionament, l'API estarà disponible a `http://localhost:3000/`.

### Executar sense Docker (opcional)

Si prefereixes executar el projecte sense Docker, segueix els següents passos:

1. **Clona el repositori** al teu ordinador:

   ```bash
   git clone https://github.com/el-teu-usuari/proba-2024.git
   cd proba-2024
   ```

2. **Instal·la les dependències** del projecte. Pots fer-ho utilitzant `npm` o `yarn`:

   Amb `npm`:

   ```bash
   npm install
   ```

   O amb `yarn`:

   ```bash
   yarn install
   ```

3. **Configura les variables d'entorn**:

   Crea un fitxer `.env` a l'arrel del projecte i afegeix-hi la següent informació:

   ```env
   MONGO_URI=la_teva_connexio_a_mongodb
   PORT=4000
   ```

   - `MONGO_URI`: La connexió a la teva base de dades MongoDB.
   - `PORT`: El port al qual vols que l'API escolti (per defecte és `3000`).
   - `JWT_SECRET`: La key per el jsonwebtokens

4. **Inicia el servidor**:

   Un cop configurat tot, pots iniciar el servidor utilitzant el següent comandament:

   Amb `npm`:

   ```bash
   npm run dev
   ```

   O amb `yarn`:

   ```bash
   yarn dev
   ```

   Això iniciarà el servidor en mode desenvolupament.

## Scripts disponibles

- **`npm run dev`** o **`yarn dev`**: Inicia el servidor en mode desenvolupament amb recompilació automàtica.
- **`npm run build`** o **`yarn build`**: Compila el codi TypeScript a JavaScript.
- **`npm start`** o **`yarn start`**: Inicia el servidor en mode producció.
- **`npm run docker:build`** o **`yarn docker:build`**: Construeix la imatge Docker del projecte.
- **`npm run docker:up`** o **`yarn docker:up`**: Engega els contenidors de Docker (aplicació i MongoDB).

## Requisits complerts

1. L’aplicació compleix amb els requisits funcionals especificats

   - **Gestió d'usuaris**: Permet registrar, actualitzar, eliminar i consultar usuaris amb els següents camps: nom, cognom, edat i email.
   - **Gestió d'activitats**: Permet crear noves activitats, consultar les activitats disponibles i apuntar-se a aquestes activitats.
   - **Exportació/Importació d'activitats:** en format JSON.
   - **Autenticació:** Utilitza JWT per assegurar les rutes que requereixen autenticació.
   - **Connexió a base de dades amb ORM**: Utilitza Mongoose per gestionar la base de dades.

2. El codi segueix bones pràctiques de programació

   - **Utilització de TypeScript** per proporcionar tipus i millorar la seguretat del codi.
   - **Validació de les dades d'entrada amb Zod** assegurant la integritat de les dades i tractant els errors adequadament.
   - **Configuracions d'ESLint i Prettier** per mantenir un estil de codi consistent i facilitar la llegibilitat.

3. El projecte segueix un patró estructural

   - **Patró MVC** per dividir la lògica de negoci (controladors), l'accés a dades (models) i les rutes (vistes). Aquesta estructura facilita l'extensió de l'aplicació, ja que cada component està desacoblat i és fàcilment substituïble o ampliable.

4. Les funcions tenen una única responsabilitat

   - Cada funció del projecte s'encarrega d'una tasca específica. Per exemple, les funcions dels controladors només gestionen les sol·licituds HTTP, mentre que la validació de dades es fa per separat mitjançant Zod.

   - Els middlewares de seguretat i validació són independents, garantint que el codi segueix el principi de responsabilitat única.

5. El codi és escalable i reutilitzable

   - **validació** d'esquemes amb Zod permet afegir noves validacions sense trencar el codi existent.
   - **estructura MVC**L'estructura model vista controlador ens permet afegir fàcilment noves funcionalitats sense

6. El codi està optimitzat i el seu rendiment és eficient

   - **endpoints**: estan optimitzats per manejar operacions amb la base de dades de manera eficient. Les consultes amb Mongoose estan dissenyades per minimitzar l'ús de recursos.
   - **Docker**: permet garantir que l'aplicació s'executi en un entorn controlat, el que optimitza el rendiment i facilita el desplegament.
