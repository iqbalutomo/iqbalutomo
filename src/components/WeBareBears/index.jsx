import React from "react";
import "@google/model-viewer";

export default function WeBareBears() {
  return (
    <model-viewer
      id="bare"
      class="top-0 w-full pt-28 pb-10"
      alt="we bare bear"
      src="/scene.gltf"
      ar
      ar-modes="webxr scene-viewer quick-look"
      // environment-image="./assets/model/bare/Material.005_baseColor.png"
      seamless-poster
      shadow-intensity="1"
      camera-controls
      auto-rotate
    ></model-viewer>
  );
}
