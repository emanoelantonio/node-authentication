CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg-crypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

INSERT INTO application_user(username, password) VALUES('emanoel', crypt('dqnyuuev', 'zla59x4QOGLg76qboLTh5zR_fa6viuao'))