import { useState } from "react";
import "./home.css";

interface fakeData {
  id: number;
  index: number;
  image: string;
  pos: string;
}
const cardData = [
  {
    id: 1,
    index: 1,
    image:
      "https://epymeonline.com/wp-content/uploads/los-mejores-Bancos-de-Imagenes-Gratis_detalle.jpg",
    pos: "c",
  },
  {
    id: 2,
    index: 2,
    image:
      "https://vilmanunez.com/wp-content/uploads/2016/05/listado-banco-de-imagenes-vectores-gratis.png",
    pos: "r",
  },
  {
    id: 3,
    index: 3,
    image:
      "https://videocursosonline.com/wp-content/uploads/2021/09/banco-de-imagenes-gratis-de-uso-libre.jpg",
    pos: "",
  },
  {
    id: 4,
    index: 4,
    image:
      "https://media.istockphoto.com/id/1221980285/es/vector/un-joven-est%C3%A1-hablando-con-colegas-usando-una-videollamada-concepto-de-conferencia-en-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=l5u9VqQKF1LMb5qYboOWGaG1TqzXwCKuDMFpDoozC2I=",
    pos: "",
  },
  {
    id: 5,
    index: 5,
    image:
      "https://media.istockphoto.com/id/955148158/es/vector/hombre-guapo-est%C3%A1-trabajando-en-su-port%C3%A1til-interior-de-la-oficina-moderna-con-los-iconos-de.jpg?s=612x612&w=0&k=20&c=mcOF--pc9RrMIe4C6T0GwKKnOtiYI_-xzBQGUcYeKAQ=",
    pos: "",
  },
  {
    id: 6,
    index: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyAuyYNpuwuynWU-UECVvv-aV6LVRzWiwZFZWW4vkviqUo6AFJO9TaCy2CifOGDNx5R8&usqp=CAU",
    pos: "",
  },
  {
    id: 7,
    index: 7,
    image:
      "https://c8.alamy.com/compes/2b149g5/ilustracion-de-dos-ninas-en-una-entrevista-de-trabajo-usando-un-portatil-y-un-auricular-una-nina-en-la-oficina-y-otra-en-casa-2b149g5.jpg",
    pos: "",
  },
  {
    id: 8,
    index: 8,
    image:
      "https://media.istockphoto.com/id/1253866845/es/vector/chica-viendo-la-lecci%C3%B3n-en-l%C3%ADnea-y-estudiando-sentado-en-su-escritorio-en-casa-joven.jpg?s=612x612&w=0&k=20&c=w1EkCVGn35eiOmoR6BiOcoh2NFCDOGKjt7v6wfD9Rf4=",
    pos: "",
  },
];
const Home = () => {
  const [btn, setbtn] = useState<fakeData[]>([cardData[0], cardData[1]]);
  const [otro, setotro] = useState<fakeData[]>(cardData);
  const handleright = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (btn.length > 2 || btn[0].index === 1) {
      const validator = cardData.filter((el) => {
        if (el.index > btn[0].index && el.index - btn[0].index < 4) {
          if (el.index - btn[0].index === 1) {
            el.pos="l"
            return el;
          } else if (el.index - btn[0].index === 2) {
            el.pos="c"
            return el;
          } else {
            el.pos="r"
            return el;
          }
        }
      });
      setbtn(validator);
    }
  };
  const handleleft = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (btn.length > 2 /* || btn[1].index === cardData.length */) {
      const validator = cardData.filter((el) => {
        if (el.index < btn[2].index && btn[2].index-el.index  < 4) {
          if ( btn[2].index -el.index  === 2) {
            el.pos="r"
            return el;
          } else if ( btn[2].index -el.index === 1) {
            el.pos="c"
            return el;
          } else {
            el.pos="l"
            return el;
          }
        }
      });
      setbtn(validator);
    }else if (btn[1].index === cardData.length){
      const validator = cardData.filter((el) => {
        if (el.index < btn[1].index && btn[1].index-el.index  < 4) {
          if ( btn[1].index -el.index  === 2) {
            el.pos="r"
            return el;
          } else if ( btn[1].index -el.index === 1) {
            el.pos="c"
            return el;
          } else {
            el.pos="l"
            return el;
          }
        }
      });
      setbtn(validator);
    }
  };
  return (
    <div className="homeCont">
      <button className="slide-btn-l" onClick={handleleft}>
        {" "}
        {"<"}
      </button>
      <div className="card-container">
        {btn.length > 2 ? (
          <>
            <div className="p-lft">
              <img src={btn[0].image} alt="izq" />
            </div>
            <div className="p-cnt">
              <img src={btn[1].image} alt="izq" />
            </div>
            <div className="p-rgt">
              <img src={btn[2].image} alt="izq" />
            </div>
          </>
        ) : btn[0].pos === "l" ? (
          <>
            <div className="p-lft">
              <img src={btn[0].image} alt="izq" />
            </div>
            <div className="p-cnt">
              <img src={btn[1].image} alt="izq" />
            </div>
          </>
        ) : (
          <>
            <div className="p-cnt">
              <img src={btn[0].image} alt="izq" />
            </div>
            <div className="p-rgt">
              <img src={btn[1].image} alt="izq" />
            </div>
          </>
        )}
        {/* {
        btn.map((el,i)=>(
            <div className="card" key={i}>{el}</div>
            ))
          } */}
      </div>

      <button className="slide-btn-r" onClick={handleright}>
        {" "}
        {">"}
      </button>
    </div>
  );
};

export default Home;
