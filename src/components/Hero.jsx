const Hero = (props) => {
    return (
        <div>
            {/* <img src="https://rabbil.com/files/rabbilVai1.webp?v=1" alt="" height="150px"/> */}
          <h1> {props.title}</h1>
          <p>{props.des}</p>
        </div>
    );
};

export default Hero;