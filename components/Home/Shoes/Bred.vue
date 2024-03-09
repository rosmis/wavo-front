<template>
    <primitive ref="shoeRef" :object="model" />
</template>

<script lang="ts" setup>
import { useAnimations, useGLTF } from "@tresjs/cientos";
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();

const { scene: model, animations } = await useGLTF(
    "/img/shoes/Jordan4_FireRed.glb",
    { draco: true }
);

const { actions } = useAnimations(animations, model);

const shoeRef = shallowRef(null);

const { onLoop } = useRenderLoop();

// onLoop(({ delta, elapsed }) => {
//     if (shoeRef.value) {
//         // shoeRef.value.rotation.y += delta;

//         gsap.to(shoeRef.value.rotation, {
//             duration: 1,
//             y: '+=0.01',
//             ease: Power4.easeInOut,
//         });
//     }
// });
</script>
