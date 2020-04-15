import ThemeContext from "../lib/context/theme";
import { Toggle, Spacer } from "@zeit-ui/react";

export default function Header({ isSmall }) {
  const { switchThemes, themeType } = React.useContext(ThemeContext);
  console.log(isSmall);
  return (
    <>
      <header>
        <div>brand</div>
        <div>
          Night
          <Toggle
            initialChecked={themeType === "light"}
            onChange={switchThemes}
          />
          Day
        </div>
      </header>
    </>
  );
}
