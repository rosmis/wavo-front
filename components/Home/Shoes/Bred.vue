<template>
    <primitive v-if="model" ref="shoeRef" :object="model" />
</template>

<script lang="ts" setup>
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();

const props = defineProps<{
    path: string;
}>();

onMounted(async () => await loadModel(props.path));

const shoeRef = shallowRef(null);
let model = shallowRef(null);

const loadModel = async (path) => {
    // const { scene } = await useLoader(GLTFLoader, path, undefined, (xhr) => {
    //     console.log(`model : ${(xhr.loaded / xhr.total) * 100}% loaded`);
    // });

    const { scene } = await useGLTF(path, { draco: true });

    model.value = scene;
    nextTick(() => {
        gsap.fromTo(
            shoeRef.value.scale,
            {
                x: 0,
                y: 0,
                z: 0,
            },
            {
                x: 1,
                y: 1,
                z: 1,
                duration: 1.2,
                ease: Power4.easeInOut,
            }
        );
    });
    console.log("model loaded", model.value);
};

watch(
    () => props.path,
    async (newPath) => {
        if (!shoeRef.value) return;

        gsap.to(shoeRef.value.rotation, {
            y: Math.PI * 4,
            duration: 1,
            ease: Power4.easeInOut,
        });

        gsap.to(shoeRef.value.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.2,
            ease: Power4.easeInOut,
        }).then(async () => {
            model.value = null;
            await loadModel(newPath);
        });
    }
);
const { onLoop } = useRenderLoop();

onLoop(({ delta, elapsed }) => {
    if (shoeRef.value) {
        shoeRef.value.rotation.y += delta;
    }
});
</script>
