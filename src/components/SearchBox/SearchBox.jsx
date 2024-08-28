import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filter/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <span className={s.span}>Find contact by name</span>
      <input
        className={s.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default SearchBox;
