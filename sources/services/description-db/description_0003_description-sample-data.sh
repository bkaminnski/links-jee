#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" description <<-EOSQL    
	INSERT INTO public.description(desc_id, desc_link_shared_id, desc_description) VALUES (nextval('desc_id_seq'), '5a607f66-4cad-4db2-a787-b22e676a651f', 'Java EE becomes an interesting platform for exposing services for mobile apps. To give you a feeling about the productivity, I installed a CORS filter, implemented, built and deployed a Java EE 7 service from scratch, exposed a JSON-array, implemented a HTTP client using stock XMLHttpRequest and rendered the result using the React JavaScript library.');    
	INSERT INTO public.description(desc_id, desc_link_shared_id, desc_description) VALUES (nextval('desc_id_seq'), '39a059a1-26d0-489d-b037-05c6d9d4a1a8', 'Containers are the latest hype. It goes without saying that Docker for the development environment is a good thing but what about running our production Java applications inside a container?');    
	INSERT INTO public.description(desc_id, desc_link_shared_id, desc_description) VALUES (nextval('desc_id_seq'), '6f7ec7d3-6e9c-4814-8fe1-860fabcaa27d', 'Things change in the JavaScript world so fast nowadays. I feel this video is relatively future proof going into 2017 as to how babel, react and webpack should be used together to make development easier.');
EOSQL
