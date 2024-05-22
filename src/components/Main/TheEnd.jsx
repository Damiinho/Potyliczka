import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const TheEnd = () => {
  const { currentList } = useContext(AppContext);

  return (
    <main>
      {currentList.map((item) => (
        <div key={item.name} className={`${item.good && "good"}`}>
          {item.name}
        </div>
      ))}
      koniec
    </main>
  );
};

export default TheEnd;
