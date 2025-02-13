import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

const ServicesImagesTable = sequelize.define("ServicesImagesTable", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    serviceImageTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serviceImage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    serviceImageDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    serviceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "ServicesTable", // Table name
            key: "id", // Primary key of ServicesTable
        },
        onDelete: "CASCADE"  // Add this to enable cascading deletes
    },
}, {
    tableName: "services_images_table",
    timestamps: true
}); 

export default ServicesImagesTable;
