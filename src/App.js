// import CardBussines from "./components/CardBussines";
// import Delete from "./components/Delete";
// import Form from "./components/Form";
import { Layout } from "./components/Layout";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback="loading">
      <>
        <Layout />
        {/* <CardBussines />
      <Delete />
      <Form /> */}
      </>
    </Suspense>
  );
}

export default App;
