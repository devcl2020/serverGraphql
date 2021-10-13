import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Empresas } from "./Entities/Empresas";
import {Detalle} from "./Entities/Detalle";
import {Emitidos} from "./Entities/Emitidos";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "handy",
    username: "root",
    password: "PgAdmin123",
    logging: true,
    synchronize: true,
    entities: [Users, Detalle, Empresas, Emitidos],

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

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
