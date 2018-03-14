// for hot reloading only. TODO: remove after development
require('file-loader!./index.ejs')


import StyleTransferExamples          from './diagrams/StyleTransferExamples.html';
import AlignedInterpolationExamples   from './diagrams/AlignedInterpolationExamples.html';
import AlignedInterpolationAnimations from './diagrams/AlignedInterpolationAnimations.html';
import SemiTransparentCombination     from "./diagrams/SemiTransparentCombination.html";
import SemiTransparentExamples        from './diagrams/SemiTransparentExamples.html';
import ThreeDStyleTransferExamples    from './diagrams/3DStyleTransferExamples.html';
import ThreeDFeatureVizExamples       from './diagrams/3DFeatureVizExamples.html';
import CPPNExamples                   from "./diagrams/CPPNExamples.html";
import CPPNAnimations                 from "./diagrams/CPPNAnimations.html";
import CPPNInterpolation              from "./diagrams/CPPNInterpolation.html";
import BunnyModel                     from "./diagrams/BunnyModel.html";

import OrbitControls from 'three-orbitcontrols';
import { Scene, PerspectiveCamera, BufferGeometry, BufferAttribute, TextureLoader, ShaderMaterial, DoubleSide, Mesh, Color, WebGLRenderer } from 'three';


{
  const figure = document.getElementById('StyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new StyleTransferExamples({target: figure});
  });
}

{
  const figure = document.getElementById('AlignedInterpolationExamples');
  figure.addEventListener("ready", function() {
    const alignedInterpolationExamples = new AlignedInterpolationExamples({target: figure});
  });
}

{
  const figure = document.getElementById('AlignedInterpolationAnimations');
  figure.addEventListener("ready", function() {
    const alignedInterpolationAnimations = new AlignedInterpolationAnimations({target: figure});
  });
}

{
  const figure = document.getElementById("SemiTransparentCombination")
  figure.addEventListener("ready", function() {
    new SemiTransparentCombination({target: figure});
  });
}

{
  const figure = document.getElementById('SemiTransparentExamples');
  figure.addEventListener("ready", function() {
    const semiTransparentExamples = new SemiTransparentExamples({target: figure});
  });
}

//Add event listener
new CPPNExamples({target: document.getElementById("CPPN-Examples")});

{
  const figure = document.getElementById('CPPNAnimations');
  figure.addEventListener("ready", function() {
    const cppnAnimations = new CPPNAnimations({target: figure});
  });
}

{
  const figure = document.getElementById('CPPNInterpolations');
  figure.addEventListener("ready", function() {
    const cppnInterpolations = new CPPNInterpolation({target: figure});
  });
}

{
  const figure = document.getElementById('BunnyModel');
  figure.addEventListener("ready", function() {
    const bunnyModel = new BunnyModel({target: figure});
  });
}

{
  const figure = document.getElementById('3DStyleTransferExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDStyleTransferExamples({target: figure});
  });
}

{
  const figure = document.getElementById('3DFeatureVizExamples');
  figure.addEventListener("ready", function() {
    const styleTransferExamples = new ThreeDFeatureVizExamples({target: figure});
  });
}