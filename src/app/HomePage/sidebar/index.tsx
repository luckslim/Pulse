"use client";
import { Button } from "@/app/components/button";
import { ContainerSideBarProfiler } from "./style";
import { Profiler } from "@/app/components/profiler";

export function Sidebar() {
  return (
    <>
      <ContainerSideBarProfiler>
        <Profiler
          urlImage="https://avatars.githubusercontent.com/u/95627552?v=4"
          name="Lucas Soares Lima"
          userName="@lucassl22"
        />
        <Button title="botão" />
        <Button title="botão" />
        <Button title="botão" />
      </ContainerSideBarProfiler>
      <div className="div"></div>
    </>
  );
}
