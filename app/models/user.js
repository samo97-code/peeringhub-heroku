module.exports = (sequelize, Sequelize,DataTypes) => {
    const User = sequelize.define("users", {
        clec_uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'clec'
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_suite: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        contact_postal_code: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        company_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile_address: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile_suite: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile_city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile_country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        profile_postal_code: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        state_of_clec_certification: {
            type: Sequelize.STRING,
            allowNull: true
        },
        upload_clec_certification: {
            type: Sequelize.STRING,
            allowNull: true
        },
        ocn: {
            type: Sequelize.STRING,
            allowNull: true
        },

    });

    return User;
};