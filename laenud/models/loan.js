import { DataTypes } from "sequelize/types";

export default function(sequelize) {
    return sequelize.define('Loan', {
        klientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        summa: {
            type: DataTypes.DECIMAL(12, 4),
            allowNull: false
        },
        intress: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        viive: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        solmimiseKp: {
            type: DataTypes.DATE,
            allowNull: false
        },
        laenuLeping: {
            type: DataTypes.STRING,
            allowNull: false
        },
        maksuPeriood: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
}