import { DataTypes } from "sequelize/types";

export default function(sequelize) {
    return sequelize.define('Client', {
        nimi: {
            type: DataTypes.STRING,
            allowNull: false
        },
        perenimi: {
            tpye: DataTypes.STRING,
            allowNull: false
        },
        kontakt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        kontonum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        juriidilineIsik: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        regNr: {
            type: DataTypes.STRING
        }

    })
}