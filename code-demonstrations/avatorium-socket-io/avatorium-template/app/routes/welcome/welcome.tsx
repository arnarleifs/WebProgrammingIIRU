import { useState } from "react";
import Button from "~/components/button/button";
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
  const [avatar, setAvatar] = useState<string>("");

  const onChooseAvatarURL = (avatar: string): void => {
    // TODO: Implement
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
