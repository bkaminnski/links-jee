#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER application WITH PASSWORD 'applicationsecretpassword';
    CREATE DATABASE application;
    GRANT ALL PRIVILEGES ON DATABASE application TO application;
EOSQL