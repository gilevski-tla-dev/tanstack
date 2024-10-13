import "./App.css";
import { usePoints } from "./usePoints";
import { usePoint } from "./usePointsById";

function App() {
  const { data, error, isLoading, isError } = usePoints();
  const { data: post } = usePoint("1");

  console.log(post);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError && error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Vite + React</h1>
      {data?.map((point) => (
        <div key={point.id}>
          <p>{point.address}</p>
          <img
            src={point.image}
            alt={point.address}
            style={{ width: "200px" }}
          />
        </div>
      ))}
    </>
  );
}

export default App;
