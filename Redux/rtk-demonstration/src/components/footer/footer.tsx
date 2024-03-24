import { Button } from "@chakra-ui/react";
import "./footer.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { changeUser } from "../../redux/features/user/user-slice";

export function Footer() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <footer className="footer">
      <Button
        onClick={() =>
          dispatch(
            changeUser({
              name: "Alexandra Moon",
              bio: "Wanderlust-driven Alexandra Moon is a digital nomad with a passion for exploring the intersection of creativity and technology. With a background in graphic design and a knack for storytelling, she's constantly on the hunt for innovative ways to weave narratives through various mediums. From designing captivating visual experiences to crafting compelling written content, Alexandra thrives on bringing ideas to life.",
            })
          )
        }
      >
        Update user
      </Button>
    </footer>
  );
}
