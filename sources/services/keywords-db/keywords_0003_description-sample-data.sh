#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" keywords <<-EOSQL    
	INSERT INTO public.keywords(keyw_id, keyw_link_shared_id, keyw_keywords) VALUES (nextval('keyw_id_seq'), '5a607f66-4cad-4db2-a787-b22e676a651f', 'Adam Bien, react, JEE');
	INSERT INTO public.keywords(keyw_id, keyw_link_shared_id, keyw_keywords) VALUES (nextval('keyw_id_seq'), '39a059a1-26d0-489d-b037-05c6d9d4a1a8', 'Christopher Batey, docker, JVM, Devoxx Poland 2016');
	INSERT INTO public.keywords(keyw_id, keyw_link_shared_id, keyw_keywords) VALUES (nextval('keyw_id_seq'), '6f7ec7d3-6e9c-4814-8fe1-860fabcaa27d', 'Chris Hawkes, react, babel, webpack'); 
EOSQL
