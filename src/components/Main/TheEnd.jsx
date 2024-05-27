import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const TheEnd = () => {
  const { currentList } = useContext(AppContext);

  return (
    <main className="theend">
      <div className="theend-title">Lista haseł</div>
      {currentList.map((item, i) => (
        <div key={item.name} className={`${item.good && "good"}`}>
          {i + 1}. {item.name}
        </div>
      ))}
    </main>
  );
};

export default TheEnd;
