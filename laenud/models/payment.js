import { DataTypes } from "sequelize";

export default function(sequelize) {
    return sequelize.define('Payment', {
        loanId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        toBePaid: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: "Payment",
            timestamps: false
        })
}