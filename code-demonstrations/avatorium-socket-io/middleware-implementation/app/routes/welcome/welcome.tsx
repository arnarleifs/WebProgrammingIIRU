import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "~/components/button/button";
import { connectSocket } from "~/store/actions/socket-actions";
import type { RootState } from "~/store/store";
import type { Route } from "./+types/home";
import avatarPng from "../../resources/main-avatar.png";
import "./styles.scss";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome" },
    { name: "description", content: "Welcome to Avatorium" },
  ];
}

const WelcomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<string>("");
  const session = useSelector((state: RootState) => state.session?.session);

  useEffect(() => {
    if (Object.keys(session).length > 0) {
      navigate("/dashboard");
    }
  }, [session]);

  const onChooseAvatarURL = (avatar: string): void => {
    dispatch(connectSocket({ avatar, sessionID: session?.sessionID }));
  };

  return (
    <div className="welcome-view-container container">
      <div
        className="default-avatar"
        style={{
          backgroundImage: `url('${avatarPng}')`,
        }}
      />
      <div className="input-container">
        <label htmlFor="avatar">Choose your avatar</label>
        <input
          autoFocus
          id="avatar"
          name="avatar"
          type="text"
          placeholder="Enter your avatar URL..."
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <Button
          onClick={() => onChooseAvatarURL(avatar)}
          style={{ float: "right", marginTop: 10 }}
        >
          Select
        </Button>
      </div>
    </div>
  );
};

export default WelcomeView;
