import Card from "./Card";
// import { robots } from "./robots.js/robots";
const CardList = ({ robot }) => {
  const cardComponent = robot.map((user, i) => {
    return (
      <Card
        key={i}
        id={robot[i].id}
        name={robot[i].name}
        email={robot[i].email}
        username={robot[i].username}
      />
    );
  });
  return <div>{cardComponent}</div>;
};
export default CardList;
