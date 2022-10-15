import classes from "./Tab.module.css";

const Tab = ({ image }) => {
  return (
    <div className={classes.Tab}>
      <div className={classes.wrapper}>
        <img
          src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80"
          className={classes.bgImage}
        />
        <div className={classes.backDrop}></div>
      </div>
    </div>
  );
};

export default Tab;
