import React, { useState } from "react";
import {AppBar,Toolbar,Typography,makeStyles} from "@material-ui/core";
import {useGetAllExerciseQuery} from "../exerciseApi"
import CardInfo from "../Components/Card";
import {Pagination} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Home = ()=>{
  const classes = useStyles();
  const [page,setPage] = useState(1);
  const {data:allData} = useGetAllExerciseQuery();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Daily Fitness
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <div style={{ display: "grid", columnGap: "50px", rowGap: "50px", gridTemplateColumns: "auto auto auto", padding: "50px" }}>
          {allData && allData.slice((page - 1) * 10, (page - 1) * 10 + 9).map((item) => <CardInfo key={item.id} {...item} />)}
        </div>
        <Pagination style={{padding:20,width:"100%",display:"flex",justifyContent:"center"}}
                count={(1327/10).toFixed(0)}
                onChange={(_,value)=>{
                    setPage(value);
                }}/>
    </main>
    </div>
  )
}
export default Home;