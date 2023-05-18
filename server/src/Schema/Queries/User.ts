import {GraphQLList, GraphQLString} from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
import {RecibidosType} from "../TypeDefs/Recibido";
import {Recibidos} from "../../Entities/Recibidos";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return Users.find();
  },
};


export const GET_PASSWORD_BYUSER = {
  type: new GraphQLList(UserType),
  args: {
    username: {type: GraphQLString},
  },
  resolve(parent: any, args: any) {
    const {username} = args;

    return Users.find({
      username: username
    });


  },
};
