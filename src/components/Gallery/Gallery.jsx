import "./Gallery.css";
import Button from "../Button/Button";

const Image = function () {
  return (
    <img
      className="Image"
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
};

const Gallery = function () {
  return (
    <section className="Gallery">
      <h2>Amazing scientist</h2>
      <div className="Gallery-images">
        <Image />
      </div>
      <Button />
    </section>
  );
};

export default Gallery;
