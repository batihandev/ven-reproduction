import { useCompiler } from "#vue-email";

export default defineLazyEventHandler(async () => {
  return defineEventHandler(async () => {
    try {
      const template = await useCompiler("TestEmail.vue", {
        props: {
          username: "Flowko",
        },
      }).catch((error) => {
        console.error(error);
      });

      if (!template) return null;

      setHeader(event, "Content-Type", "text/html; charset=utf-8");

      return template.html;
    } catch (error) {
      console.error(error);
    }
  });
});
