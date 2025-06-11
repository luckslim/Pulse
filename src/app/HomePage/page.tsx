"use client";
import {
  GithubLogoIcon,
  ImagesSquareIcon,
  MagnifyingGlassIcon,

  SmileyIcon,
} from "@phosphor-icons/react";
import {
  ContainerExplorer,
  ContainerFeed,
  ContainerProvider,
  ContainerSideBar,
} from "./style";
import { PostProvider } from "../components/postProvider/page";
export default function HomePage() {
  return (
    <>
      <ContainerProvider>
        <ContainerSideBar>
          <div>
            <section>
              <img
                src="https://avatars.githubusercontent.com/u/95627552?v=4"
                alt=""
              />
              <span>
                <p>Lucas Soares Lima</p>
                <small>lucaslima78@hotmail.com</small>
              </span>
              <span>...</span>
            </section>
          </div>
          <div>
            <button>Meus Posts</button>
            <button>Pulse</button>
            <button>button</button>
          </div>
        </ContainerSideBar>
        <ContainerFeed>
          <div>
            <textarea
              name=""
              id=""
              placeholder="Em que você esta Trabalhando hoje?"
            ></textarea>
            <span>
              <section>
                <ImagesSquareIcon size={22} />
                <SmileyIcon size={22} />
                <GithubLogoIcon size={22} />
              </section>
              <button>Postar</button>
            </span>
          </div>
          <div>

          <PostProvider/>
          </div>
        </ContainerFeed>
        <ContainerExplorer>
          <span>
            <MagnifyingGlassIcon size={22} />
            Tags em alta
          </span>
          <button>#bosonaro na cadeia!</button>
          <button>#Neymar eu te amo!</button>
          <button>#Lula ladrao roubou meu coração!</button>
        </ContainerExplorer>
      </ContainerProvider>
    </>
  );
}
