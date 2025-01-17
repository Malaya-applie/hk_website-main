import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ClientFeedbackAttributes {
  id: number;
  name: string;
  position: string;
  company: string;
  userimage: string;
  feedback: string;
}

interface ClientFeedbackCreationAttributes
  extends Optional<ClientFeedbackAttributes, "id"> {}

class ClientFeedback
  extends Model<ClientFeedbackAttributes, ClientFeedbackCreationAttributes>
  implements ClientFeedbackAttributes
{
  public id!: number;
  public name!: string;
  public position!: string;
  public company!: string;
  public feedback!: string;
  public userimage!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ClientFeedback.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    feedback: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    userimage: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "default user.jpg"
    },
  },
  {
    tableName: "client_feedbacks",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export {
  ClientFeedback,
  ClientFeedbackAttributes,
  ClientFeedbackCreationAttributes,
};
