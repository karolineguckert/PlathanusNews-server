# PlathanusNews-server



### Dependencies
- @material-ui/core: 4.11.2
- react-icons: ^4.2.0
- react-router-dom: 5.2.1

### Instalation
- **1.** npm install
- **2.** npm start

# Banco

- Foi usado o banco Postgree e foram criadas apenas estas duas tabelas:


-- Table: public.authors
-- DROP TABLE public.authors;

CREATE TABLE public.authors
(
    id integer NOT NULL DEFAULT nextval('author_id_seq'::regclass),
    name character varying(150) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT author_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.authors
    OWNER to postgres;
    
##    
 
-- Table: public.notices
-- DROP TABLE public.notices;

CREATE TABLE public.notices
(
    id integer NOT NULL DEFAULT nextval('notices_id_seq'::regclass),
    author_id integer NOT NULL DEFAULT nextval('notices_author_id_seq'::regclass),
    title character varying(300) COLLATE pg_catalog."default" NOT NULL,
    text text COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT notices_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.notices
    OWNER to postgres;
