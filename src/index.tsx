import React from "react";
import ReactDOM from "react-dom";

import * as styles from "./style/app.scss";
console.log(styles);

ReactDOM.render(<h1 className={styles.someClass}>Hello world</h1>, document.getElementById("root"));
