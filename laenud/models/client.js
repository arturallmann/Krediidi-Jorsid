import { DataTypes } from "sequelize";

export default function(sequelize) {
    return sequelize.define('Client', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        accountnum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        corporation: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        regNr: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}