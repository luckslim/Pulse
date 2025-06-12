import { Actions } from "@/app/components/actions";
import { TextareaProvider } from "@/app/components/textarea";
import { CurrencyCircleDollarIcon, DotsThreeOutlineVerticalIcon, GithubLogoIcon, HeartIcon, ImagesSquareIcon, ShareNetworkIcon, SmileyIcon } from "@phosphor-icons/react";
import { ContainerFeedProvider } from "./style";

export function Feed() {
  return (
    <>
      <ContainerFeedProvider>
        <TextareaProvider PlaceHolder="Poste aqui!"/>
        <Actions/>
      </ContainerFeedProvider>
      {/* <section>
        <div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/95627552?v=4"
              alt=""
            />
            <span>
              <p>Lucas Soares Lima</p>
              <small>@lucassoares33</small>
            </span>
          </div>
          <DotsThreeOutlineVerticalIcon size={22} />
        </div>
        <span>
          <button>Iniciando</button>
          <button>GitHub</button>
        </span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo,
          debitis, eos voluptatibus corporis consectetur ipsam laboriosam
          suscipit soluta accusantium est voluptas natus nostrum sunt saepe
          consequatur eius id obcaecati eligendi.
        </p>
        <img
          src="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2022/11/11174210/sao-paulo-8.jpg"
          alt=""
        />
        <span>
          <HeartIcon size={22} />
          <CurrencyCircleDollarIcon size={22} />
          <ShareNetworkIcon size={22} />
        </span>
      </section> */}
    </>
  );
}
