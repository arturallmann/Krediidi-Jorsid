import { DataTypes } from "sequelize";

export default function(sequelize) {
    return sequelize.define('Loan', {
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(12, 4),
            allowNull: false
        },
        interest: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        penalty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        paymentPeriod: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "loan",
        timestamps: false
    })
}