const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="photo1" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
