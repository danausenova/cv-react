import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

const AboutHobby = () => {
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <h3
        style={{
          fontSize: "46px",
          fontWeight: "bold",
          marginBottom: "5%",
        }}
      >
        О хобби
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5%",
        }}
      >
        <MDBCard style={{ width: "18rem" }}>
          <MDBCardImage
            src="https://i.pinimg.com/originals/09/10/ae/0910aea2fd6a4c401bbe36a717f1c5f9.jpg"
            class="card-img-top"
            position="top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Чтение книг</MDBCardTitle>
            <MDBCardText>
              Одно из моих хобби: читать книги. А любимый жанр художественной
              литературы - антиутопии.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ width: "18rem" }}>
          <MDBCardImage
            src="https://i.pinimg.com/originals/ea/4e/99/ea4e99251e1fadc10443c1c53a81cb04.jpg"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Вышивка и плетение</MDBCardTitle>
            <MDBCardText>
              А вышивка - мой метод медитации и морального отдыха.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ width: "18rem" }}>
          <MDBCardImage
            src="https://balthazar.club/uploads/posts/2023-01/1674301128_balthazar-club-p-turizm-estetika-vkontakte-86.jpg"
            class="card-img-top"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>Походы и туры</MDBCardTitle>
            <MDBCardText>
              Длительные походы помогают отвлечься от рутины и зарядиться
              энергией природы.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AboutHobby;
