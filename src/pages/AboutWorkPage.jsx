import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";
import React from "react";

const AboutWorkPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="wrapper_right">
          <h3>О работе</h3>
          <div className="wrapper_right-text">
            <h5>Секретарь судебного заседания</h5>
            <p>Верховный Суд Кыргызской Респблики</p>
            <p>2018-2019 гг.</p>
          </div>
          <div className="wrapper_right-text">
            <h5>Юрисконсульт</h5>
            <p>Частный нотаруис</p>
            <p>2020-2023 гг.</p>
          </div>
          <div className="wrapper_right-text">
            <h5>Начинающий программист</h5>
            <p>Обучение в Makers</p>
            <p>2023г.-по настоящее время</p>
          </div>
        </div>
        <div className="wrapper_right-progress">
          <h5>Мои навыки</h5>
          <p>HTML</p>
          <MDBProgress height="20">
            <MDBProgressBar
              bgColor="dark"
              width="100"
              valuemin={0}
              valuemax={100}
            >
              100%
            </MDBProgressBar>
          </MDBProgress>
          <p>CSS</p>
          <MDBProgress height="20">
            <MDBProgressBar
              bgColor="dark"
              width="100"
              valuemin={0}
              valuemax={100}
            >
              100%
            </MDBProgressBar>
          </MDBProgress>
          <p>Java Script</p>
          <MDBProgress height="20">
            <MDBProgressBar
              bgColor="dark"
              width="99"
              valuemin={0}
              valuemax={100}
            >
              99%
            </MDBProgressBar>
          </MDBProgress>
          <p>React</p>
          <MDBProgress height="20">
            <MDBProgressBar
              bgColor="dark"
              width="50"
              valuemin={0}
              valuemax={100}
            >
              50%
            </MDBProgressBar>
          </MDBProgress>
        </div>
      </div>
    </div>
  );
};

export default AboutWorkPage;
