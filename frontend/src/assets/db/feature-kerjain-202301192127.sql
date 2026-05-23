--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2023-01-19 21:27:05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 696946)
-- Name: feature; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.feature (
    id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    created_by character varying(255),
    updated_at timestamp(6) without time zone NOT NULL,
    updated_by character varying(255),
    name character varying(255)
);


ALTER TABLE public.feature OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 696945)
-- Name: feature_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.feature_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.feature_id_seq OWNER TO postgres;

--
-- TOC entry 3356 (class 0 OID 0)
-- Dependencies: 209
-- Name: feature_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.feature_id_seq OWNED BY public.feature.id;


--
-- TOC entry 3207 (class 2604 OID 697129)
-- Name: feature id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feature ALTER COLUMN id SET DEFAULT nextval('public.feature_id_seq'::regclass);


--
-- TOC entry 3350 (class 0 OID 696946)
-- Dependencies: 210
-- Data for Name: feature; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.feature VALUES (1, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'PROJECT_READ');
INSERT INTO public.feature VALUES (2, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'TODO_READ');
INSERT INTO public.feature VALUES (3, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'CLIENT_READ');
INSERT INTO public.feature VALUES (4, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'USER_READ');
INSERT INTO public.feature VALUES (5, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'PROJECT_CRUD');
INSERT INTO public.feature VALUES (6, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'USER_CRUD');
INSERT INTO public.feature VALUES (7, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'CLIENT_CRUD');
INSERT INTO public.feature VALUES (9, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'SUPPORT_READ');
INSERT INTO public.feature VALUES (10, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'SUPPORT_CRUD');
INSERT INTO public.feature VALUES (11, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'CS_CRUD');
INSERT INTO public.feature VALUES (12, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'CS_READ');
INSERT INTO public.feature VALUES (13, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'MANUAL_READ');
INSERT INTO public.feature VALUES (14, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'MANUAL_CRUD');
INSERT INTO public.feature VALUES (15, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'ISSUE_CRUD');
INSERT INTO public.feature VALUES (16, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'ISSUE_READ');
INSERT INTO public.feature VALUES (17, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'DM_READ');
INSERT INTO public.feature VALUES (18, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'DM_CRUD');
INSERT INTO public.feature VALUES (8, '2023-01-06 09:38:46.960909', 'admin', '2023-01-06 09:38:46.960909', 'admin', 'TODO_CRUD');


--
-- TOC entry 3357 (class 0 OID 0)
-- Dependencies: 209
-- Name: feature_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.feature_id_seq', 10, true);


--
-- TOC entry 3209 (class 2606 OID 696953)
-- Name: feature feature_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.feature
    ADD CONSTRAINT feature_pkey PRIMARY KEY (id);


-- Completed on 2023-01-19 21:27:06

--
-- PostgreSQL database dump complete
--

