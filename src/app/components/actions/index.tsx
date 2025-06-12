import { GithubLogoIcon, ImagesSquareIcon, SmileyIcon } from "@phosphor-icons/react";
import { Button } from "../button";
import { ActionProvider, BoxActionIcons } from "./style";

export function Actions() {
  return (
    <>
      <ActionProvider>
        <BoxActionIcons>
          <ImagesSquareIcon size={22} />
          <SmileyIcon size={22} />
          <GithubLogoIcon size={22} />
        </BoxActionIcons>
        <Button title="Postar"/>
      </ActionProvider>
    </>
  );
}
