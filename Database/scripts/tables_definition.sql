/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 15.0 		*/
/*  Created On : 23-jun.-2024 1:51:31 p. m. 				*/
/*  DBMS       : PostgreSQL 						*/
/* ---------------------------------------------------- */

/* Drop Sequences for Autonumber Columns */

DROP SEQUENCE IF EXISTS usuarios_id_seq
;

/* Drop Tables */

DROP TABLE IF EXISTS "USUARIOS" CASCADE
;

/* Create Tables */

CREATE TABLE "USUARIOS"
(
	id bigint NOT NULL   DEFAULT NEXTVAL(('"usuarios_id_seq"'::text)::regclass),	-- Id generic of user
	nombre varchar(255) NOT NULL,	-- name of user
	apellido varchar(255) NOT NULL,	-- id generic and relational with role of user.
	numero_documento varchar(20) NOT NULL,	-- Cedula of user
	celular varchar(10) NOT NULL,
	fecha_nacimiento date NOT NULL,	-- date of born user
	correo varchar(255) NOT NULL,	-- email of user
	clave varchar(255) NOT NULL	-- password encripted of user
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE "USUARIOS" ADD CONSTRAINT "PK_User"
	PRIMARY KEY (id)
;

ALTER TABLE "USUARIOS" 
  ADD CONSTRAINT "UNIQUE_Number_Document" UNIQUE (numero_documento)
;

ALTER TABLE "USUARIOS" 
  ADD CONSTRAINT "UNIQUE_Email" UNIQUE (correo)
;

/* Create Table Comments, Sequences for Autonumber Columns */

COMMENT ON TABLE "USUARIOS"
	IS 'In this table containt the users for the login'
;

COMMENT ON COLUMN "USUARIOS".id
	IS 'Id generic of user'
;

COMMENT ON COLUMN "USUARIOS".nombre
	IS 'name of user'
;

COMMENT ON COLUMN "USUARIOS".apellido
	IS 'id generic and relational with role of user.'
;

COMMENT ON COLUMN "USUARIOS".numero_documento
	IS 'Cedula of user'
;

COMMENT ON COLUMN "USUARIOS".fecha_nacimiento
	IS 'date of born user'
;

COMMENT ON COLUMN "USUARIOS".correo
	IS 'email of user'
;

COMMENT ON COLUMN "USUARIOS".clave
	IS 'password encripted of user'
;

CREATE SEQUENCE usuarios_id_seq INCREMENT 1 START 1
;
