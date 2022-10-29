import Card from "react-bootstrap/Card";
import img from "../../public/images/anxiety.jpg";
import style from "./hero.module.scss";
import cx from "classnames";

function Hero() {
  // return (
  //   <Card style={{ width: "inherit", height: "400px", marginTop: "4rem" }}>
  //     <Card.Img variant="top" src={img.src} />
  //   </Card>
  // );
  return (
    <div className={cx(style.hero)}>
      <div className="container">
        <div className={cx(style.heroContent)}>
          <div className="row">
            <div className="col-md-12">
              <h1>Bootstrap Hero Image</h1>
            </div>
            <div className="col-md-6">
              <p>
                Bootstrap Hero Image Bootstrap Hero Image Bootstrap Hero Image
                Bootstrap Hero Image
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Bootstrap Hero Image Bootstrap Hero Image Bootstrap Hero Image
                Bootstrap Hero Image Bootstrap Hero Image Bootstrap Hero Image
                Bootstrap Hero Image Bootstrap Hero Image Bootstrap Hero Image
                Bootstrap Hero Image
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
