import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database"; // Adjust the import based on your project structure

interface NewsletterSignupAttributes {
  id: number;
  name: string;
  email: string;
  agreed: boolean;
}

interface NewsletterSignupCreationAttributes
  extends Optional<NewsletterSignupAttributes, "id"> {}

class NewsletterSignup
  extends Model<NewsletterSignupAttributes, NewsletterSignupCreationAttributes>
  implements NewsletterSignupAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public agreed!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

NewsletterSignup.init(
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
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    agreed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "newsletter_signups",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export {
  NewsletterSignup,
  NewsletterSignupAttributes,
  NewsletterSignupCreationAttributes,
};
