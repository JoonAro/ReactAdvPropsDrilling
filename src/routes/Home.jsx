import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataRedux } from "../store/dataSlice";

// const data = await getData(url);
//dispatch hook from redux
const Home = () => {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  console.log("Data: ", data);

  /* useEffect(() => {
    dispatch(getDataRedux(url))
  }, [dispatch]) */

  useEffect(() => {
    if (data === undefined) dispatch(getDataRedux(url))
  }, [data, dispatch])
  //dispatch as a dependency
  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data} />
    </div>
  );
};

export default Home;
