<template>
  <div id="app">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particlesOptions"
    />
  </div>
</template>

<script>
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
export default {
  name: "App",

  data() {
    return {
      particlesOptions: {
        preset: "fireworks",
      },
    };
  },

  methods: {
    async particlesInit(engine) {
      await loadFireworksPreset(engine);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
