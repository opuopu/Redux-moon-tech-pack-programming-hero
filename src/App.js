
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";


function App() {


  return (
   <Provider store={store}>
     <div>
      <RouterProvider router={routes} />
    </div>
   </Provider>
  );
}

export default App;
