import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import {
  SiMysql,
  SiFlutter,
  SiBootstrap,
  SiReact,
  SiPytorch,
  SiHtml5,
  SiCss3,
  SiFlask,
  SiNumpy,
  SiPython,
  SiJupyter,
  SiStreamlit,
  SiTailwindcss,
  SiRedux,
  SiJavascript
} from "react-icons/si";
import styles from "./ProjectCard.module.css";



const assets = {
  "Shopping App": (
    <ImageHolder
      primarySource={Asset.ShoppingApp}
      secondarySource={Asset.FallbackShoppingApp}
      alt="Perpetual Crusades"
      className="card-img"
    />
  ),
  "StudyNotion Clone": (
    <ImageHolder
      primarySource={Asset.StudyNotion}
      secondarySource={Asset.FallbackStudyNotion}
      alt="Project URefer"
      className="card-img"
    />
  ),
  "Weather App": (
    <ImageHolder
      primarySource={Asset.WeatherApp}
      secondarySource={Asset.FallbackWeatherApp}
      alt="HackUMass Website"
      className="card-img"
    />
  ),
  "Whatsapp Chat Analyzer": (
    <ImageHolder
      primarySource={Asset.WhatsappChat}
      secondarySource={Asset.FallbackWhatsappChat}
      alt="Foliage"
      className="card-img"
    />
  ),
  "Password Generator": (
    <ImageHolder
      primarySource={Asset.PasswordGenerator}
      secondarySource={Asset.FallbackPasswordGenerator}
      alt="Foliage"
      className="card-img"
    />
  ),

  "Random Gif Generator": (
    <ImageHolder
      primarySource={Asset.GifGenerator}
      secondarySource={Asset.FallbackGifGenerator}
      alt="SpectralCNN"
      className="card-img"
    />
  ),
};

const icons = {
  Bootstrap: (
    <SiBootstrap className={styles.icon} style={{ color: "#7952B3" }} />
  ),
  CSS: <SiCss3 className={styles.icon} style={{ color: "#1572B6" }} />,

  Flask: (
    <SiFlask className={styles.icon} style={{ color: "#000000" }} />
  ),
  Flutter: (
    <SiFlutter className={styles.icon} style={{ color: "#02569B" }} />
  ),
  HTML: <SiHtml5 className={styles.icon} style={{ color: "#E34F26" }} />,
  MySQL: <SiMysql className={styles.icon} style={{ color: "#4479A1" }} />,
  NumPy: <SiNumpy className={styles.icon} style={{ color: "#013243" }} />,
  Python: <SiPython className={styles.icon} style={{ color: "#3a709a" }} />,
  PyTorch: <SiPytorch className={styles.icon} style={{ color: "#EE4C2C" }} />,
  React: <SiReact className={styles.icon} style={{ color: "#61DAFB" }} />,
  Jupyter: <SiJupyter className={styles.icon} style={{ color: "#179702" }} />,
  Streamlit: <SiStreamlit className={styles.icon} style={{ color: "#179702" }} />,
  Tailwind: <SiTailwindcss className={styles.icon} style={{ color: "#38B2AC" }} />,
  JavaScript: <SiJavascript className={styles.icon} style={{ color: "#F7DF1E" }} />,

  Redux: <SiRedux className={styles.icon} style={{ color: "#764ABC" }} />,
};

const ProjectCard = (props) => {
  return (
    <Card className={styles.container}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}
        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
