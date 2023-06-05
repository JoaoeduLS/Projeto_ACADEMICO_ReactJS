import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="ACADEMICO">
      <Row className="flex gap-5 justify-content-md-center" md={4}>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115075677683716217/Cursos-Online.png?width=838&height=558"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Cursos</Card.Title>
            <Button variant="primary" href="/cursos">
              Ver
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115076936222388304/ilustracao-do-negocio-de-inicializacao_53876-9142.jpg?width=696&height=558"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Disciplinas</Card.Title>
            <Button variant="primary" href="/disciplinas">
              Ver
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115076343231688704/309708-formacao-continuada-de-professores-qual-a-importancia.jpg?width=810&height=558"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Professores</Card.Title>
            <Button variant="primary" href="/professores">
              Ver
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115075456719405116/escolaweb-capas-artigos-5-maneiras-de-engajar-os-alunos-nas-atividades-escolares-1.jpg?width=890&height=558"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Alunos</Card.Title>
            <Button
              variant="primary"
              href="/alunos"
            >
              Ver
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115077341023055882/BLOGO.jpg?width=1010&height=558"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Salas</Card.Title>
            <Button
              variant="primary"
              href="/salas"
            >
              Ver
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://media.discordapp.net/attachments/1115075174585344123/1115077221980307536/istockphoto-1132900975-170667a.jpg?width=701&height=385"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>Semestre</Card.Title>
            <Button
              variant="primary"
              href="/semestre"
            >
              Ver
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Pagina>
  );
};

export default index;
