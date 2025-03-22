import "./styles.scss";
import { useSelector } from "react-redux";
import type { RootState } from "~/store/store";
import type { Session } from "~/types/session";

const Navigation = () => {
  const session = useSelector(
    (state: RootState) => state.session.session
  ) as Session;

  return (
    <nav className="navigation">
      <div
        className="avatar"
        style={{ backgroundImage: `url(${session.avatar})` }}
      />
    </nav>
  );
};

export default Navigation;
