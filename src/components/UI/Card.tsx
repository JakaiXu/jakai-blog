
import { ChildrenType } from "../Layout";
import classes from "../Card.module.css";
const Card = ({ children }: ChildrenType) => {
  return <div className={classes.mainImage}>{children}</div>;
};

export default Card;
