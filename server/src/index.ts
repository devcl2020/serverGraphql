import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Empresas } from "./Entities/Empresas";
import {Detalle} from "./Entities/Detalle";
import {Emitidos} from "./Entities/Emitidos";
import {Caf} from "./Entities/Caf";
import {Xml} from "./Entities/Xml";
import {ListDistrSii} from "./Entities/ListDistrSii";
import {History} from "./Entities/History";
import {Recibidos} from "./Entities/Recibidos";
import {DetalleRecep} from "./Entities/DetalleRecep";

const main = async () => {
  await createConnection({
    // type: "postgres",
    // // host: "54.69.31.7",
    // host: "localhost",
    // database: "handy",
    // username: "postgres",
    // password: "PgAdmin123",

    type: "mysql",
    host: "45.239.111.70",
    database: "toquesil_handy",
    username: "toquesil_admin",
    password: "@leJandr0",
    logging: true,
    synchronize: true,
    entities: [Users, Detalle, DetalleRecep, Empresas, Emitidos, Recibidos,Caf, Xml, ListDistrSii, History],

  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(80, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
