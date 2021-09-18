CREATE TABLE orders (
    id bigserial NOT NULL,
     name character varying(50) NOT NULL,
     email character varying(20) NOT NULL,
     instructions character varying,
     attachment character varying(50)
 );