import ThemeContext from "../lib/context/theme";
import { Toggle, Spacer } from "@zeit-ui/react";
import { Moon, Sun } from "react-feather";

export default function Footer() {
  const { switchThemes, themeType } = React.useContext(ThemeContext);
  return (
    <footer>
      <div className="toggle-wrapper">
        <Moon size={20} color={themeType === "light" ? "black" : "white"} />
        <Spacer x={0.5} />
        <Toggle
          initialChecked={themeType === "light"}
          onChange={switchThemes}
        />
        <Spacer x={0.5} />
        <Sun size={20} color={themeType === "light" ? "black" : "white"} />
      </div>
      <style jsx>{`
        footer {
            border-top 1px solid #eaeaea;
            padding: 1rem
        }
        .toggle-wrapper {
            display: flex;
        }
      `}</style>
    </footer>
  );
}
