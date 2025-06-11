import {
  ContainerContentText,
  ContainerFlagsContent,
  ContainerImageProfiler,
  ContainerNameProfiler,
  ContainerPostContent,
  ContainerPostProvider,
  ContainerProfiler,
  ContainerSectionProfiler,
  ContainerUserNameProfiler,
} from "./style";

export function PostProvider() {
  return (
    <>
      <ContainerPostProvider>
        <ContainerProfiler>
            <img src="https://avatars.githubusercontent.com/u/95627552?v=4" alt="" />
          <ContainerSectionProfiler>
            <ContainerNameProfiler>Lucas Soares Lima</ContainerNameProfiler>
            <ContainerUserNameProfiler>@lucaslim33</ContainerUserNameProfiler>
          </ContainerSectionProfiler>
          <div>sd</div>
        </ContainerProfiler>
        <ContainerPostContent>
          <ContainerFlagsContent>
            <button>Github</button>
          </ContainerFlagsContent>
          <ContainerContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In vel
            beatae suscipit asperiores ea fugiat vero, qui numquam cumque
            similique commodi deserunt necessitatibus eum eius natus doloremque
            voluptas aut est.
          </ContainerContentText>
          <ContainerImageProfiler src="" alt="" />
        </ContainerPostContent>
        <span>
          <section></section>
        </span>
      </ContainerPostProvider>
    </>
  );
}
