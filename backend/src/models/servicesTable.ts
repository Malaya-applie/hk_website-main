import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";


const ServicesTable = sequelize.define("ServicesTable", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    serviceType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serviceDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: "services_table",
    timestamps: true
});

export default ServicesTable;